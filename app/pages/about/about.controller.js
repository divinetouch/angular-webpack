let AboutController = ($scope) => {
    let vm = $scope.vm = {};

    vm.name = 'About page';
};

AboutController.$inject = ['$scope'];

module.exports = AboutController;
