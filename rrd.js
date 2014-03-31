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
 *                 {start: '1395994500', end: '1396076100'}
 *
 */
exports.fetch = function (filename, CF, options, callback) {

  // rrdtool executes with defaults, here are some more to complement
  var CF = CF || 'AVERAGE';

  var opts = _.flatten(_.zip(_.keys(options),_.values(options)));
  // args for use with spawn when I'll be streaming rrd updates lives
  var args = ['fetch', filename, CF].concat(opts);  // args for use with spawn...
  // for now use exec and get fixed buffered output
  var command = ['rrdtool'].concat(args).join(' ');

  var child = exec(command, function (error, stdout, stderr) {


    var rawData = stdout.split('\n');
    var fieldNames = rawData.shift().trim().split(' ');
    var rawFiltered = _.filter(rawData,function(item) {if (item!='') {return item;}});

    var data = _.map(rawFiltered, function(item){
      if (item!='') {
        var recordData = item.split(' ');
        var record = {};
        var timestamp = recordData.shift();
        record['timestamp'] = parseFloat(timestamp.slice(0,timestamp.length-1));
        record['fields'] = fieldNames;
        record['data'] = _.map(recordData,function(item){return parseFloat(item);});
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
      callback(error,null);
    }

    if (error !== null) {
      callback(error,null);
    }

  });

};
