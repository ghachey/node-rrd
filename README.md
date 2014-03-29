node-rrd
========

A NodeJS module to fetch data from RRD database file. Essentially, this will aim to be a thin wrapper around rrdtool, the actual command line tool to work with rrd database files. I will only implement features I need, but other feature should be easy to add.

I needed something flexible to easily read data from RRD database files. I could not find anything so I used it as an excuse to write a first module and learn a few things along the way. Use at your own risk. If you have any suggestions or want to point out things that are done wrong, please do.


Caveats
-------

* See http://nodejs.org/api/fs.html#fs_caveats
