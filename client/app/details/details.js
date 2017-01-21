angular.module('iwa.details', [])

.controller('DetailsController', function ($scope, $routeParams, DashboardPrograms, Goals) {
	// get 'guid' of the clicked program
   $scope.currGuid = $routeParams.guid;

   DashboardPrograms.getAll().then(function(programs){
   	 // find program with current 'guid' from list of all programs
     $scope.currProgram = programs.filter(function(program){
       return program.guid === $scope.currGuid; 
     })[0];

     // get a list of all goals
     Goals.getAll().then(function(goals){
     	// create a storage of all goals with 'guid' used as key
     	var goalsStorage = goals.reduce(function(store, goal){
     		store[goal.guid] = {"title": goal.title, "incentive_value": goal.incentive_value}
     		return store;
     	}, {});

     	$scope.hasGoals = $scope.currProgram.goals.length > 0;
     	if ($scope.hasGoals) {
     	  $scope.currGoals = $scope.currProgram.goals.map(function(goal) {
     	  	return goalsStorage[goal.guid];
     	  });

     	  $scope.totalValue = $scope.currGoals.reduce(function(sum, goal){
     	  	return sum + goal.incentive_value;
     	  }, 0);
     	}
     });
   });

  });