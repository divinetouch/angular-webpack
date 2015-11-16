global.$ = global.jQuery = require('jquery');
const angular = require('angular');
const uirouter = require('angular-ui-router');
let routing = require('./config/app.routes');
let widgets = require('./widgets');
let pages = require('./pages');

let app = angular.module('app', [uirouter, pages, widgets])
                .config(routing);

require('./config/app.config')(app);

require('../bower_components/Materialize/dist/css/materialize.min.css');
require('./style/app.scss');
require('../bower_components/Materialize/dist/js/materialize.min.js');
