const path = require('path');
const util = require('util');
const v8 = require('v8');

util.log(v8.getHeapStatistics());

