angular.module('iwa.services', [])

.factory('DashboardPrograms', function () {

  var getAll = function () {
    return ['aa', 'bb', 'cc'];
  };

  return {
    getAll: getAll
  };

  })
