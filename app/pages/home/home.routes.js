let routes = ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./home.html'),
            controller: 'HomeController'
        });
};

routes.$inject = ['$stateProvider'];

module.exports = routes; 

