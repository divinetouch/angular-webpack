let angular = require('angular');
let authenticate = require('./authentication/authenticate');
let ngCookies = require('angular-cookies');

module.exports = angular.module('app.services',[ngCookies])
    .factory('authenticate', authenticate).name;

