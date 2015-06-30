(function() {
    var register = function(Handlebars) {

        /************* BEGIN HELPERS *************/
        var helpers = {
            // put all of your helpers inside this object
            ifCond : function (v1, operator, v2, options) {
              if (operator) {
                  switch (operator) {
                      case '==':
                          return (v1 == v2) ? options.fn(this) : options.inverse(this);
                      case '===':
                          return (v1 === v2) ? options.fn(this) : options.inverse(this);
                      case '<':
                          return (v1 < v2) ? options.fn(this) : options.inverse(this);
                      case '<=':
                          return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                      case '>':
                          return (v1 > v2) ? options.fn(this) : options.inverse(this);
                      case '>=':
                          return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                      case '&&':
                          return (v1 && v2) ? options.fn(this) : options.inverse(this);
                      case '||':
                          return (v1 || v2) ? options.fn(this) : options.inverse(this);
                      default:
                          return options.inverse(this);
                  }
              } else if (from) {
                  return options.fn(this);
              } else {
                  return options.inverse(this);
              }
            }
        };
        /************* END HELPERS *************/

        if (Handlebars && typeof Handlebars.registerHelper === "function") {
            // register helpers
            for (var prop in helpers) {
                Handlebars.registerHelper(prop, helpers[prop]);
            }
        } else {
            // just return helpers object if we can't register helpers here
            return helpers;
        }
    };

    // client
    if (typeof window !== "undefined") {
        // since all partials and templates precompiled into the same bucket, do this to allow partial lookups to work
        Handlebars.partials = Handlebars.templates;
        register(Handlebars);
    }
    // server
    else {
        module.exports.register = register;
        module.exports.helpers = register(null);
    }
})();
