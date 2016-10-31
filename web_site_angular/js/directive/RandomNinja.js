app.directive('randomNinja', [function (){

    return {
      restrict: 'E',
      scope: {
        myNin: '=',
        title: '=',
      },
      templateUrl: 'views/random.html',
      transclude: true,
     replace: true,
      controller: function ($scope){
        $scope.random = Math.floor(Math.random()*4);
      }
    }

}]);
