module.exports = function(app){
  var files = [];
  files.forEach(function(file){
    require("./" + file)(app);
  });
};
