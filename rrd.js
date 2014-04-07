var _ = require('underscore');
var exec = require('child_process').exec;

/**
 * @description
 *
 * Fetches data from a RRD database. Takes exactly the same arguments as
 * rrdtool (see man rrdfetch). Supported ones are documented below. At a minimum
 * a filename should be passed to fetch data.
 *
 * @param {String} filename
 * @param {String} CF the consolidation function
 * @param {Object} options parameters for the remaining, for example,
 *                 {start: '1395994500', end: '1396076100'}. You must pass null
 *                 if you do not want to specify the options; rrdtool will
 *                 choose defaults for you in that case.
 *
 */
exports.fetch = function (filename, CF, options, callback) {

  // rrdtool executes with defaults, here are some more to complement
  var CF = CF || 'AVERAGE';

  var opts = _.flatten(_.zip(_.keys(options),_.values(options)));
  // args for use with spawn when I'll be streaming rrd updates lives
  // should I even do that?! will rrd be able to update or will it lock?!
  var args = ['fetch', filename, CF].concat(opts);  // args for use with spawn...
  // for now use exec and get fixed buffered output
  var command = ['rrdtool'].concat(args).join(' ');

  var child = exec(command, function (error, stdout, stderr) {

    var rawData = stdout.split('\n');
    var fieldNames = rawData.shift().trim().split(/\s+/);
    var rawFiltered = _.filter(rawData,function(item) {if (item!='') {return item;}});

    var data = _.map(rawFiltered, function(item){
      if (item!='') {
        var recordData = item.split(' ');
        var record = {};
        var timestamp = recordData.shift();
        record['timestamp'] = parseFloat(timestamp.slice(0,timestamp.length-1));
        record['fields'] = fieldNames;
        record['data'] = _.map(recordData,function(item){
          var val = parseFloat(item);
          if (isNaN(val)) {
            val = null;
          }
          return val;
        });
        return record;
      }
    });

    callback(null,data);

    if (error !== null) {
      callback(error,null);
    }

  });

};

/**
 * @description
 *
 * Find the last update time of an RRD.
 *
 * @param {String} filename
 *
 */
exports.last = function (filename, callback) {

  // args for use with spawn when I'll be streaming rrd updates lives
  var args = ['last', filename];  // args for use with spawn...
  // for now use exec and get fixed buffered output
  var command = ['rrdtool'].concat(args).join(' ');

  var child = exec(command, function (error, stdout, stderr) {

    try {
      var last = parseFloat(stdout);
      callback(null,last);
    } catch (e) {
      console.error("Error parsing last timestamp: ", e);
      callback(e,null);
    }

    if (error !== null) {
      callback(error,null);
    }

  });

};

/**
 * @description
 *
 * Retrieve the information for a RRD databse. Not much thought was put into
 * how to encapsulate the information from rrdtool info. All I need for now is
 * the ability to get the resolution of the RRD. The rrdtool info outputs
 * data such as rra[0].cf = 'AVERAGE' which I is simply stored as "rra[0].cf": "AVERAGE"
 * in a JSON object. Should rrd be an array with small objects with key:value?
 * will see if I ever get a need for it.
 *
 * @param {String} filename
 * @return {Object} object of key values representing the RRD information
 */
exports.info = function (filename, callback) {

  // args for use with spawn when I'll be streaming rrd updates lives
  var args = ['info', filename];  // args for use with spawn...
  // for now use exec and get fixed buffered output
  var command = ['rrdtool'].concat(args).join(' ');

  var child = exec(command, function (error, stdout, stderr) {

    if (error !== null) {
      callback(error,null);
    }

    var lines = stdout.split('\n');

    var keyValues = _.filter(_.map(lines, function(line) {
      return line.split(" = ");
    }), function(line) {if (line!='') {return line}});

    var info = _.reduce(keyValues, function(memory, keyValue) {
      memory[keyValue[0]] = clean(keyValue);
      return memory;
    }, {});

    callback(null,info);

  });

};


/**
 * Rough and dirty cleanup utility function.
 */
var clean = function(keyValue) {

  // Filename different depending on where rrdtool is called; strip path...
  if (keyValue[0]=='filename') {
    var fileNameTokens = keyValue[1].split('/');
    keyValue[1] = fileNameTokens[fileNameTokens.length-1].replace(/"/g, "");
    return keyValue[1];
  }

  // Strip off redundant double quotes
  if (keyValue[1].search("\"")==0) {
    return keyValue[1].replace(/"/g, "");
  }

  // Turn NaN into null for now
  if (keyValue[1]=='NaN') {
    return null;
  }

  // When possible to parse to number do so
  try {
    return parseFloat(keyValue[1]);
  } catch (er) {
    return keyValue[1];
  }

  return keyValue[1];
};
