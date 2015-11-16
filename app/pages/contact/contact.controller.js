let ContactController = ($scope) => {
    let vm = $scope.vm = {};

    vm.name = 'Contact page';

    vm.form = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    };

    vm.submit = () => {
        console.log('submitted: ' + angular.toJson(vm.form, true));
    };

};

ContactController.$inject = ['$scope'];

module.exports = ContactController;
