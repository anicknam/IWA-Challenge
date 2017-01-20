angular.module('iwa.dashboard', [])

.controller('DashboardController', function ($scope, $location, DashboardPrograms) {
   
   DashboardPrograms.getAll().then(function(res){
    $scope.allPrograms = res.data["program_blueprints"];
   });

   $scope.clickHandler = function(guid){
     $location.path('/details/' + guid);
   };


  });