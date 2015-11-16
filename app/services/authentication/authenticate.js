let authenticate = ($rootScope, $cookies, $http, $q) => {

    let STATUS_KEY = 'user.login.status',
        signInUrl = '<URL>',
        signOutUrl = '<URL>';

    /**
     * a mathod that make post request to remote server
     */
    let makeRequest = (method, data, url) => {
        return $http({
            method: method,
            url: url,
            data: data
        });
    };

    let handleResponse = (response) => {
        console.log('response from server is: ' + angular.toJson(response.data, true));
        return response.data;
    };

    let handleError = (response) => {
        return $q.reject('Error retrieving data from server. (HTTP status: ' + response.status + ')');
    };

    let setLogInStatus = (response) => {
        $cookies.put(STATUS_KEY, response.data.success);
        $rootScope.$broadcast(STATUS_KEY);
    };

    let signIn = (userInfo) => {
        return makeRequest('POST', userInfo, signInUrl)
            .then(setLogInStatus)
            .then(handleResponse)
            .catch(handleError);
    };

    let signOut = (userInfo) => {
        return makeRequest('POST', userInfo, signOutUrl)
            .then(setLogInStatus)
            .then(handleResponse)
            .catch(handleError);
    };

    /**
     * this is for testing only, signIn method should be used
     */
    let testService = (userInfo) => {
        $cookies.put(STATUS_KEY, true);
        $rootScope.$broadcast(STATUS_KEY);
        console.log('user just log in: ' + angular.toJson(userInfo, true));
        return new Promise((resolve) => {
            resolve(userInfo); 
        });
    };
    
    let service = {
        signIn : signIn,
        signOut : signOut,
        testService: testService
    };

    return service;

};

authenticate.$inject = ['$rootScope', '$cookies', '$http', '$q'];

module.exports = authenticate;
