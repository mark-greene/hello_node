module.exports = function(app){
  app.get("/", function(req, res, next){
    res.render("home", {pageTitle: "Home"});
  });

  app.get("/bar", function(req, res, next){
    res.render("home", {pageTitle: "Bar"});
  });

  app.get("/table", function(req, res, next){
    res.render("home", {pageTitle: "Table"});
  });

  app.get("/area", function(req, res, next){
    res.render("home", {pageTitle: "Area"});
  });

  app.get("/purchase", function(req, res, next){
    res.render("home", {pageTitle: "Purchase"});
  });
};
