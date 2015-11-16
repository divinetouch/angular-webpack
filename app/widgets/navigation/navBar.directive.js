let NavigationBarWidget = () => {
    let link = () => {
         
    };
    let directive = {
        restricted: 'E',
        replace: true,
        scope: {},
        template: require('./navBar.html'), 
        link: link    
    };

    return directive;
};

NavigationBarWidget.$inject = [];

module.exports = NavigationBarWidget;

