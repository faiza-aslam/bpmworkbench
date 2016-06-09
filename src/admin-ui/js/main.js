requirejs.config({
	baseUrl:'/js',
	paths: {
		angular:'../bower_components/angular',
		['ui.bootstrap']:'../bower_components/angular-bootstrap',
		['ui.router']:'../bower_components/angular-ui-router/release',
		'jquery':'../bower_components/jquery/dist',
		'blockUI':'../bower_components/blockUI',
		['bootstrap-select']:'../bower_components/bootstrap-select/dist/js'
	},
	shim:{
		'jquery.blockUI' : {
			deps: ['jquery']
		},
		jquery: {
			exports:'jQuery'
		},
		'bootstrap-select' : {
			deps: ['jquery']
		}
	},
	deps:['/js/ui.js']
});