module.exports=function(serverInfo) {

	var processApi=require("./processApi.js")(serverInfo);
	var taskApi=require("./taskApi.js")(serverInfo);

	return {
		// process
		getProcessApplications:processApi.getProcessApplications,
		getCurrentState: processApi.getCurrentState,
		// tasks
		getTaskStatus:taskApi.getTaskStatus
	};

}