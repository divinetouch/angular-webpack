let routes = ($stateProvider) => {
    $stateProvider
        .state('about', {
            url: '/about',
            template: require('./about.html'),
            controller: 'AboutController'
        });
};

routes.$inject = ['$stateProvider'];

module.exports = routes; 

