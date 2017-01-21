angular.module('iwa.details', [])

.controller('DetailsController', function ($scope, $routeParams, DashboardPrograms) {

   $scope.currGuid = $routeParams.guid;

   DashboardPrograms.getAll().then(function(programs){
     $scope.currProgram = programs.filter(function(program){
       return program.guid === $scope.currGuid; 
     })[0];
   });

  });