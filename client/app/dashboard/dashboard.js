angular.module('iwa.dashboard', [])

.controller('DashboardController', function ($scope, $location, DashboardPrograms) {
   
   DashboardPrograms.getAll().then(function(programs){
     $scope.programs = programs;
   });


   $scope.clickHandler = function(program){
     $location.path(`/details/${program.guid}`);
   };


  });