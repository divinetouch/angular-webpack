const uirouter = require('angular-ui-router');
let angular = require('angular');
let ContactController = require('./contact.controller');
let routing = require('./contact.routes');
require('./contact.scss');

module.exports = angular.module('app.contact', [uirouter])
        .config(routing)
        .controller('ContactController', ContactController).name;

