(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
        
        $stateProvider
            .state('login', {
             url: '/',
            controller: 'userAuthCtrl as login',
             templateUrl: '/templates/login.html'
            })
            .state('main', {
             url: '/',
            controller: 'roomCtrl as main',
             templateUrl: '/templates/main.html'
            });
    }
    angular
        .module('Bloc-Chat', ['firebase', 'ui.bootstrap', 'ui.router'])
        .config(config);
})();




