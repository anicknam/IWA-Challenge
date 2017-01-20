angular.module('iwa.dashboard', [])

.controller('DashboardController', function ($scope, $location, DashboardPrograms) {
   
   $scope.programs = DashboardPrograms.getAll();

   $scope.clickHandler = function(guid){
     $location.path('/details/' + guid);
   };


  });