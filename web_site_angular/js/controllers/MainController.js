app.controller('MainController', ['$scope', '$http', function($scope, $http){

      $scope.removeNinja = function (nin){

       var removedNinja = $scope.ninjas2.indexOf(nin);
       $scope.ninjas2.splice(removedNinja, 1);

     };

     $scope.addNinja = function (){
        $scope.ninjas2.push({

          name: $scope.newNinja.name,
          belt: $scope.newNinja.belt,
          rate: $scope.newNinja.rate,
          available : true

        });

        $scope.newNinja.name = "",
        $scope.newNinja.belt = "",
        $scope.newNinja.rate = ""

     };

     $scope.removeNinjas = function (){

       $scope.ninjas2 = [];
     };

      $scope.message = "Hey yo! This is done with a AngualarJS";
      $scope.ninjas1 = ['yoshi','guri','kari','hua'];


//console.log(angular.toJson($scope.ninja));

$http.get('data/ninja.json').success(function (data){

  $scope.ninjas2 = data;

});
}]);
