requirejs.config({
	baseUrl:'/js',
	paths: {
		angular:'../bower_components/angular',
		['ui.bootstrap']:'../bower_components/angular-bootstrap',
		['ui.router']:'../bower_components/angular-ui-router/release',
		'jquery':'../bower_components/jquery/dist'
	},
	deps:['/js/ui.js']
});