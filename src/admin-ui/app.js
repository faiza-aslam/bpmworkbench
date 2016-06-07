'use strict';

var express = require('./node_modules/express');
var session = require('./node_modules/express-session');
var processApi = require('./bpmrestapi/processApi')();
var taskApi= require('./bpmrestapi/taskApi')();
var uuid = require('./node_modules/uuid');
var async= require('./node_modules/async');
var _request=require('./node_modules/request'); // only used for /api/setServerInfo

var app = express();
var router = express.Router();

// static resources handling like html, css, images etc.
app.use('/ui',express.static("."));
app.use('/js',express.static("./js"));
app.use('/bower_components',express.static('./bower_components'));

// session configuration
app.use(session({
	genid: function(req) {
		return uuid.v1(); // use UUIDs for session IDs
	},
	secret: ')JM%FC*KjNFVI4V',
	resave: false,
	saveUninitialized: false
}));

// routes
router.get("/", function(request, response, route) {
	response.redirect(request.session.serverInfo ? "/ui/index.html#/home" : "/ui/index.html#server-info");
});


// sends call to bpm for server validation
router.get("/api/setServerInfo", function(request, response, route) {
	_request({
		uri: 'http://' + request.query.host + ':' + request.query.port + '/rest/bpm/wle/v1/systems',
		auth: {
			username: request.query.userName,
			password: request.query.password,
			sendImmediately: true
		},
		method: 'GET'
	}, function(error, _response, body) {
		var failed=(error || body==='');
		if(!failed) {
			request.session.serverInfo=request.query;
		}
		response.json({result: failed ? 'error' : 'OK'});
	});	
});

// return connected server info
router.get("/api/getServerInfo", function(request, response, route) {
	response.json(request.session.serverInfo);
});

// set processApi routes
processApi.setRoutes(router);
taskApi.setRoutes(router);

// use router
app.use('/', router);

// start listening
app.listen(8000, function() {
	console.log('IBM BPM Workbench listening on port 8000!');
});