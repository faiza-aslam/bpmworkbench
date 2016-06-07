require(['angular/angular', 'ui.router/angular-ui-router', 'jquery/jquery'], function() {
	angular.module('bpm.workbench', ['ui.router']);

	angular.module('bpm.workbench')
		.controller('ServerDetailsController', function($scope, $http, $state, $timeout, $rootScope) {			
			if($state.current && $state.current.name==='home') {
				// we are already connected to a server
				// pull the details
				$http.get('/api/getServerInfo').then(function(response){
					$rootScope.serverInfo=response.data;
					$rootScope.connected=true;
				})
				return;
			}

			// let user connect to server
			$scope.serverInfo = {
				host: '',
				port: '9080',
				userName: 'cell_admin'
			};
			$scope.connected=false;
			$scope.connect = function() {
				// need to send server details to users's session
				// it should be in a service, but doesn't do much here ...
				$http({
					method: 'GET',
					url: '/api/setServerInfo',
					params: $scope.serverInfo
				}).then(function(response) {
					if (response.data.result == 'OK') {
						delete $scope.connectionFailed;
						$scope.connected=true;
						$state.go("home");
					} else {
						$scope.connectionFailed = true;
					}
				});
			};

			$timeout(function() {
				$("#host").focus();
			}, 100);
		})
		.directive('bpmWorkbenchHeader', function() {
			return {		
				restrict: 'E',
				templateUrl: '/ui/templates/header.tpl',
				controller:'ServerDetailsController'				
			};
		}).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
			// Now set up the states
			$stateProvider.state('serverInfo', {
					url: '/server-info',
					templateUrl: '/ui/templates/serverDetails.tpl'
				})
				.state('home', {
					url: '/home',
					templateUrl: '/ui/templates/home.tpl'
				});
		}]);

	angular.element(document).ready(function() {
		angular.bootstrap(document, ['bpm.workbench']);
	});
});