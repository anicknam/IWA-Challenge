angular.module('iwa', [
  'iwa.services',
  'iwa.dashboard',
  'iwa.details',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/dashboard/dashboard.html',
      controller: 'DashboardController',
    })
    .when('/details/:guid', {
      templateUrl: 'app/details/details.html',
      controller: 'DetailsController',
    })

})