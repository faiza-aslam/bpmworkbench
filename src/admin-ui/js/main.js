requirejs.config({
	baseUrl:'/js',
	paths: {
		angular:'../bower_components/angular',
		['ui.bootstrap']:'../bower_components/angular-bootstrap'
	},
	deps:['/js/ui.js']
});