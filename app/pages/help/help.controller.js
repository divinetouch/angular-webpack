let HelpController = ($scope) => {
    let vm = $scope.vm = {};

    vm.name = 'Help page';
};

HelpController.$inject = ['$scope'];

module.exports = HelpController;
