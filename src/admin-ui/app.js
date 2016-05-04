'use strict';

var express = require('./node_modules/express');
var session = require('./node_modules/express-session');
var bpmRestApi = require('./bpmrestapi')();
var uuid = require('./node_modules/uuid');
var async= require('./node_modules/async');

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
	response.redirect(request.session.serverInfo ? "/ui/index.html" : "/ui/index.html#login");
});

router.get("/api/processApps", function(request, response) {	
	async.seq(bpmRestApi.getProcessApplications)(function(err, results) {
		response.json(results);
	});
});

// use router
app.use('/', router);

// start listening
app.listen(8000, function() {
	console.log('IBM BPM Workbench listening on port 8000!');
});