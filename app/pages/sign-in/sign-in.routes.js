let routes = ($stateProvider) => {
    $stateProvider
        .state('sign-in', {
            url: '/sign-in',
            template: require('./sign-in.html'),
            controller: 'SignInController'
        });
};

routes.$inject = ['$stateProvider'];

module.exports = routes; 

