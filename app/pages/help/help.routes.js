let routes = ($stateProvider) => {
    $stateProvider
        .state('help', {
            url: '/help',
            template: require('./help.html'),
            controller: 'HelpController'
        });
};

routes.$inject = ['$stateProvider'];

module.exports = routes; 

