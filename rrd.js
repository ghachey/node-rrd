var _ = require('underscore');
var spawn = require('child_process').spawn;

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
exports.fetchData = function (filename, CF, options) {

  // rrdtool executes with defaults, here are some more to complement
  var CF = CF || 'AVERAGE';

  var opts = _.flatten(_.zip(_.keys(options),_.values(options)));
  var args = ['fetch', filename, CF].concat(opts);

  // Add callback...

  var rrdfetch = spawn('rrdtool', args);

  rrdfetch.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  rrdfetch.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  rrdfetch.on('close', function (code) {
    console.log('child process exited with code ' + code);
  });


};
