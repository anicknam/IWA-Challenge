angular.module('iwa.services', [])

.factory('DashboardPrograms', function ($http) {

  var getAll = function () {
    return $http.get('./data/program_blueprints.json')
  };

  return {
    getAll: getAll
  };

  })
