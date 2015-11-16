let angular = require('angular');
let navigationBarWidget = require('./navigation/navBar.directive');

module.exports = angular.module('app.widgets', [])
    .directive('navigationBarWidget', navigationBarWidget).name;
