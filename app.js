angular.module('flexiple', [])
.controller('postProjectController', ['$scope', function($scope) {

	$scope.formData = {};
	$scope.isContentWriter = false;
	$scope.isDeveloper = false;
	$scope.formValid = false;

	$scope.$watch('formData.resourceType', function(value) {
			console.log(value);
	       if(value == "dev"){
	       		$scope.isDeveloper = true;
	       		$scope.isContentWriter = false;
	       }
	       if(value == "cont_write") {
	       		$scope.isDeveloper = false;
	       		$scope.isContentWriter = true;
	       }
	});

	$scope.$watch('formData.contentType', function(value) {
			console.log(value);
	       if(value == "blog"){
	       		$scope.isBlog = true;
	       		$scope.isCopyWrite = false;
	       }
	       if(value == "copywrite") {
	       		$scope.isBlog = false;
	       		$scope.isCopyWrite = true;
	       }
	});

	$scope.submitted = false;
	$scope.postProject = function(project) {
		$scope.submitted = true;
		if(project.$valid){
			$scope.formValid = true;
		}else {
			return false;
		}
	}
}]);