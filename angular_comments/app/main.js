

var app = angular.module('txtcomment', []);

   app.controller ('mainCtrl', function($scope) {

       $scope.comments = [];

       $scope.btn_add = function (){

             if($scope.txtcomment != '') {
                  $scope.comments.push($scope.txtcomment);
                  $scope.txtcomment = "";

                 }

            }

        $scope.btn_remove = function ($item) {
               $scope.comments.splice($item, 1);

        };

})
