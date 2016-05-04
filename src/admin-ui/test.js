var async = require('./node_modules/async');
var _results;

async.seq(function(val, callback) {
	callback(null, "result");
})(1, function(err,
	results) {
	_results=results;
});

console.log(_results);