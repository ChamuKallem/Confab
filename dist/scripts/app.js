(function(){
    function config($stateProvider, $locationProvider){
        console.log("Testing app itself");
        $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
        
        $stateProvider
         .state('main', {
             url: '/',
            controller: 'mainCtrl as main',
             templateUrl: '/templates/main.html'
            });
        console.log("Testing exit of app");
    }
    angular
        .module('Bloc-Chat', ['firebase', 'ui.router'])
        .config(config);
})();




