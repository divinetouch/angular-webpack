let HomeController = ($scope) => {
    let vm = $scope.vm = {};

    vm.name = 'Home page';
};

HomeController.$inject = ['$scope'];

module.exports = HomeController;
