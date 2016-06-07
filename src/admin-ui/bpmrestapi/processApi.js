module.exports = function() {
	var _request = require('../node_modules/request');

	return {
		setRoutes: function(router) {

			// get process applications
			router.get("/api/processApplications", function(request, response) {
				_request({
					uri: 'http://' + request.session.serverInfo.host + ':' + request.session.serverInfo.port + '/rest/bpm/wle/v1/processApps',
					auth: {
						username: request.session.serverInfo.userName,
						password: request.session.serverInfo.password,
						sendImmediately: true
					},
					method: 'GET'
				}, function(error, _response, body) {
					response.json(JSON.parse(body).data);
				});
			});

			// get current state of an instance
			router.get("/api/currentState", function(request, response) {
				// do something with _request ...
			});
		}
	}
}