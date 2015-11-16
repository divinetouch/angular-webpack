const uirouter = require('angular-ui-router');
let angular = require('angular');
let AboutController = require('./about.controller');
let routing = require('./about.routes');
require('./about.scss');

module.exports = angular.module('app.about', [uirouter])
        .config(routing)
        .controller('AboutController', AboutController).name;

