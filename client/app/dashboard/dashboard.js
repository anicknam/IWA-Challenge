angular.module('iwa.dashboard', [])

.controller('DashboardController', function ($scope, $location, DashboardPrograms) {
   
   DashboardPrograms.getAll().then(function(res){
    // list of programs with all given properties 
    var rawPrograms = res.data["program_blueprints"];

    // list of programs with properties of interest
    var programs = rawPrograms.map(function(program){
      return {"guid": program.guid,
              "description": program.description,
              "display_order": program.display_order,
              "display_type": program.display_type,
              "icon_url": program.icon_url,
              "title": program.title,
              "goals": program.goals
              }
    });

    // sorted list of programs, based on display_order property 
    $scope.programs = programs.sort(function(prog1, prog2) {
      return (prog1.display_order > prog2.display_order) ? 1 : -1;
    });

   });

   $scope.clickHandler = function(guid){
     $location.path(`details/${guid}`);
   };


  });