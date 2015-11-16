let SignInController = ($scope, authenticate, $state) => {
    let vm = $scope.vm = {};

    vm.name = 'Sign in page';

    vm.form = {
        email: '',
        password: ''
    };

    vm.submit = () => {
        authenticate.testService(vm.form).then((data) => {
            console.log('resulet after sign in' + data); 
            $state.go('home');
        });
    };

};

SignInController.$inject = ['$scope', 'authenticate', '$state'];

module.exports = SignInController;
