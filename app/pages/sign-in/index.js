const uirouter = require('angular-ui-router');
let angular = require('angular');
let SignInController = require('./sign-in.controller');
let routing = require('./sign-in.routes');
let services = require('../../services');
require('./sign-in.scss');

module.exports = angular.module('app.signIn', [services, uirouter])
        .config(routing)
        .controller('SignInController', SignInController).name;

