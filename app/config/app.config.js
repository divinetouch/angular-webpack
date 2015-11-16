// any specific action or trigger after angular finish loading views
let materializeConfig = ($rootScope, $timeout) => {
    $rootScope.$on('$viewContentLoaded', function() {
        $timeout(function() {
            console.log('upgraded');
        });
    });
};

materializeConfig.$inject = ['$rootScope', '$timeout'];

module.exports = (app) => {
    app.run(materializeConfig);
};
