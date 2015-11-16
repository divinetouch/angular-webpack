let routes = ($stateProvider) => {
    $stateProvider
        .state('contact', {
            url: '/contact',
            template: require('./contact.html'),
            controller: 'ContactController'
        });
};

routes.$inject = ['$stateProvider'];

module.exports = routes; 

