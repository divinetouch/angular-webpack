let routes = ($urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
};

routes.$inject = ['$urlRouterProvider','$locationProvider'];

module.exports = routes;
