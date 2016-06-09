define(['bootstrap-select/bootstrap-select'], function(){
	var processApplications=function(){
		return {		
			restrict: 'E',
			templateUrl: '/ui/templates/processApplications.tpl',
			replace: true,
			link: function ($scope, element, attrs) {
				$(".overlay").block();
				$scope.getProcessApplications().then(function(processAppsList) {
					// insert all process applications sort by last modified
					for(var i=processAppsList.length-1; i != -1; i--) {
						$('select', element).append($('<option/>').attr('value', processAppsList[i].shortName).text(processAppsList[i].name));
					}
					$('select', element).selectpicker({					 
					  liveSearch: true,
					  width:'400px',
					  size:10
					});

					$(".overlay").unblock();

				}, function(error) {
					console.log(error);
				});
			},
			controller: function($scope, $http, $q) {				
				$scope.getProcessApplications=function() {
					return $q(function(resolve, reject) {
						$http({url:'/api/processApplications', method:'GET'}).then(function(response) {
							resolve(response.data.processAppsList);
						}, function(error) {
							reject(error);
						});
					});
				}								
			}
		};
	};	
	return processApplications;
});