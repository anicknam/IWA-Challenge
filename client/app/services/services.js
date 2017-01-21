angular.module('iwa.services', [])

.factory('DashboardPrograms', function ($http) {

  var getAll = function () {
    // return a promise to use in controller
    return $http.get('./data/program_blueprints.json')
    .then(function(res){
      // get list of programs with all given properties 
      var rawPrograms = res.data["program_blueprints"];
      // get list of programs with properties of interest
      var programs = rawPrograms.map(function(program){
        return {"guid": program.guid,
                "description": program.description,
                "display_order": program.display_order,
                "display_type": program.display_type,
                "icon_url": program.icon_url,
                "incentive_description": program.incentive_description,
                "title": program.title,
                "goals": program.goals
                }
      });
      // sort list of programs, based on display_order property 
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

.factory('Goals', function ($http) {
  
  var getAll = function () {
  	return $http.get('./data/goals.json')
  	.then(function(res){
  		return res.data["goals"];
  	})
  };

  return {
  	getAll: getAll
  }

})
