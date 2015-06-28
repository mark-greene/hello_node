module.exports = function(app){
  var files = ["main"];

  app.use(function(req, res, next){
      res.locals.path = req.path;
      res.locals.navPages = [{
        url: "/",
        name: "Home"
      },{
        url: "/bar",
        name: "Bar"
      },
      {
        url: "/table",
        name: "Table"
      },
      {
        url: "/area",
        name: "Area"
      },
      {
        url: "/purchase",
        name: "Purchase"
      }];
      next();
  });

  files.forEach(function(file){
    require("./" + file)(app);
  });
};
