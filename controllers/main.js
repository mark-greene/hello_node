module.exports = function(app){
  app.get("/", function(req, res, next){
    res.render("home", {pageTitle: "Home"});
  });

  app.get("/foo", function(req, res, next){
    res.render("home", {pageTitle: "Foo"});
  });

  app.get("/bar", function(req, res, next){
    res.render("home", {pageTitle: "Bar"});
  });

  app.get("/purchase", function(req, res, next){
    res.render("home", {pageTitle: "Purchase"});
  });
};
