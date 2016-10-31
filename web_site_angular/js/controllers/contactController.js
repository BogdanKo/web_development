app.controller('contactController',['$scope', '$location', function($scope, $location){

$scope.sendMessage = function (){

     $location.path('form-success');

  };
}]);
