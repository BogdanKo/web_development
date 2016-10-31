app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

   $locationProvider.html5Mode(true);

   $routeProvider

        .when('/home', {
          templateUrl: 'views/home.html',
          controller: 'MainController'
        })
        .when('/directory', {
          templateUrl: 'views/directory.html',
          controller: 'MainController'
        })
        .when('/contact',{
          templateUrl: 'views/contact.html',
          controller: 'contactController'

        })
        .when('/form-success', {
          templateUrl: 'views/form-success.html',
          controller: 'contactController'
        })
        .otherwise ({
          redirectTo: '/home'
        })

}]);
