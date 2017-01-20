angular.module('iwa.details', [])

.controller('DetailsController', function ($scope, $routeParams) {
   
   $scope.currGuid = $routeParams.guid;

  });