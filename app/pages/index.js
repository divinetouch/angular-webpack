const angular = require('angular');
let home = require('./home');
let about = require('./about');
let contact = require('./contact');
let signIn = require('./sign-in');
let help = require('./help');

module.exports = angular.module('app.pages', [home, about, contact, signIn, help]).name;
