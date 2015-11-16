const uirouter = require('angular-ui-router');
let angular = require('angular');
let HelpController = require('./help.controller');
let routing = require('./help.routes');
require('./help.scss');

module.exports = angular.module('app.help', [uirouter])
        .config(routing)
        .controller('HelpController', HelpController).name;

