# Description

This is a simple angular-webpack boilerplate that can be used as a quick prototype without having to set everything up frome scratch everytime. 

This boilerplate uses angular version 1.4.X, ECMASCRIPT 2016 (ES6), Materialize CSS, and Webpack as the module bundler.

---

# Boilerplate structor

The project separate into 6 main parts:

1. assets
2. config
3. pages
4. services
5. style
6. widgets

### 1 - assets

This module/directory is for saving all of the assets such as images.

### 2 - config

This is where the main configuration for the app goes. For example, the default routing for the app and the action the needed to run after a view is loaded, etc.

### 3 - pages

To keep things simple each page is set up as a stand alone module and can be loaded by the main app module. Each of the page has a controller, html template, route, and style.

### 4 - services

This is again a stand alone module. This module is binding all the pages/features togeather. Each of the page can be imported and able to use any of the services. This boilerplate include a sign in service as an example to show how it can be integrated with pages.

### 5 - style

This is where the main style for app located. Each of the pages/module also has its own style. 

### 6 - widgets

This module contains the directives and can be used across all the pages.

---

# How to set up and run the project

1. Clone this project: ```git clone git@github.com:divinetouch/angular-webpack.git```
2. Go to the project folder/directory: ```cd angular-webpack```
3. Run bower install: ```bower install```
4. Run npm install: ```npm install```
5. Start the server: ```npm start``` or ```webpack-dev-server -w```

- to build the project, simply execute the command : ```webpack``` (for production: ```webpack -p```)