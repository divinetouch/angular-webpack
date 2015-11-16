const uirouter = require('angular-ui-router');
const angular = require('angular');
let HomeController = require('./home.controller');
let routing = require('./home.routes');
require('./home.scss');

module.exports = angular.module('app.home', [uirouter])
        .config(routing)
        .controller('HomeController', HomeController).name;

