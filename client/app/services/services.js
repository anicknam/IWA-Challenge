angular.module('iwa.services', [])

.factory('DashboardPrograms', function ($http) {

  var getAll = function () {
    return $http.get('./data/program_blueprints.json')
    .then(function(res){
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
      var sortedPrograms = programs.sort(function(prog1, prog2) {
        return (prog1.display_order > prog2.display_order) ? 1 : -1;
      });
      
      return sortedPrograms;

     });

  };



  return {
    getAll: getAll
  };

  })
