var express = require("express"),
    exphbs  = require('express-handlebars'),
    helpers = require('./public/js/helpers');

  // mongoStore used for storing session in mongodb
  // mongoStore = require("connect-mongo")(require("connect"));

module.exports = function(app, config){

  var env = process.env.NODE_ENV || "development";

  app.locals.project_id = process.env.PROJECT_ID;
  app.locals.api_key = process.env.API_KEY;

  /*
  * Serve up files in the /public directory statically
  */
  app.use('/public', express.static('public'));

  /*
  * View setup
  */
  var hbs = exphbs.create({
      defaultLayout: "main",
      extname: ".hbs",
      helpers: helpers.helpers,
      partialsDir: 'views/partials/', // same as default, I just like to be explicit
      layoutsDir: "views/layouts/"    // same as default, I just like to be explicit
  });

  app.engine('hbs', hbs.engine);
  app.set('view engine', 'hbs');


  /*
  * dev configuration
  */
  if (env === "development") {
    app.use(require("morgan")("dev"));
    app.use(require("errorhandler")());
    // templates use minified and concatenated css and js by default
    // debug boolean used in templates to include unconcatenated and unminified css and js
    app.locals.debug = true;

  }
  /*
   * production configuration
   */
  else {
     app.use(require("compression")({
        threshold: 512 // only compress things that are at least 512 bytes in size
    }));
  }

  /* Session management */
  // TODO, update this using new module
  /*
    // cookieParser
    app.use(express.cookieParser());
  */

  // global error handler
  app.use(function(err, req, res, next) {
    res.status(500);
      // handle error somehow
      res.end();
  });

};
