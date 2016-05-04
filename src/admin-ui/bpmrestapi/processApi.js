module.exports = function(serverInfo) {
	var request = require('../node_modules/request');

	return {
		getCurrentState: function(instanceId, callback) {
			return {};
		},
		getProcessApplications: function(callback) {
			request({
				uri: 'http://pmo-vm-01:9080/rest/bpm/wle/v1/processApps',
				auth: {
					username: 'cell_admin',
					password: 'passw0rd',
					sendImmediately: true
				},
				method: 'GET'
			}, function(error, response, body) {
				callback(null, JSON.parse(body).data);
			});
		}
	}
}