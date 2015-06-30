this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "<h1>";
  if (helper = helpers.pageTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n\n";
  stack1 = self.invokePartial(partials.chart, 'chart', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["Handlebars"]["templates"]["main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"public/css/style.css\" />\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"public/css/chart.css\" />\n    ";
  }

function program3(depth0,data) {
  
  
  return "\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"public/css/style.min.css\" />\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"public/css/chart.min.css\" />\n    ";
  }

function program5(depth0,data) {
  
  
  return "\n  <script type=\"text/javascript\" src=\"public/js/lib/chart/chart.js\"></script>\n  <script type=\"text/javascript\" src=\"public/js/lib/handlebars.runtime-v1.3.0.js\"></script>\n  <script type=\"text/javascript\" src=\"public/js/templates.js\"></script>\n  <script type=\"text/javascript\" src=\"public/js/helpers.js\"></script>\n";
  }

function program7(depth0,data) {
  
  
  return "\n  <script type=\"text/javascript\" src=\"public/js/build/hello-node.min.js\"></script>\n";
  }

  buffer += "<!doctype html>\n<html>\n<head>\n    <meta charset=\"utf-8\" />\n    <title>";
  if (helper = helpers.pageTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " - Example app</title>\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.debug), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.getconnect.io/connect-js/0.2.1/standalone/connect-all.min.css\" />\n</head>\n<body>\n\n<script type=\"text/javascript\" src=\"https://cdn.getconnect.io/connect-js/0.2.1/standalone/connect-all.min.js\"></script>\n<script type=\"text/javascript\" src=\"//cdnjs.cloudflare.com/ajax/libs/numeral.js/1.4.5/numeral.min.js\"></script>\n<script type=\"text/javascript\" src=\"//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/moment.min.js\"></script>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.debug), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = self.invokePartial(partials.topnav, 'topnav', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  if (helper = helpers.body) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.body); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</body>\n</html>\n";
  return buffer;
  });

this["Handlebars"]["templates"]["chart"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div id=\"sales-text\" class=\"example-viz\"></div>\n<script> chart_page(\"";
  if (helper = helpers.pageTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"); chart_text(); </script>\n<div id=\"sales-bar\" class=\"example-viz\"></div>\n<script> chart_bar(); </script>\n<div id=\"sales-table\" class=\"example-viz\"></div>\n<script> chart_table(); </script>\n<div id=\"sales-area\" class=\"example-viz\"></div>\n<script> chart_area(); </script>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div id=\"sales-bar\" class=\"example-viz\"></div>\n<script> chart_page(\"";
  if (helper = helpers.pageTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"); chart_bar(); </script>\n";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div id=\"sales-table\" class=\"example-viz\"></div>\n<script> chart_page(\"";
  if (helper = helpers.pageTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"); chart_table(); </script>\n<div id=\"sales-table3\" class=\"example-viz\"></div>\n<script> chart_table3(); </script>\n<div id=\"sales-table2\" class=\"example-viz\"></div>\n<script> chart_table2(); </script>\n";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div id=\"sales-area\" class=\"example-viz\"></div>\n<script> chart_page(\"";
  if (helper = helpers.pageTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"); chart_area(); </script>\n";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n<div id=\"sales-text\" class=\"example-viz\"></div>\n<input id=\"purchase\" type=\"button\" value=\"Purchase\" onclick=\"window.location.reload()\" />\n<script> chart_page(\"";
  if (helper = helpers.pageTitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.pageTitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"); chart_purchase(); chart_sales(100); chart_text(); </script>\n";
  return buffer;
  }

  buffer += "<script> chart('";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "', '";
  if (helper = helpers.api_key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.api_key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'); </script>\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.pageTitle), "==", "Home", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.pageTitle), "==", "Home", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.pageTitle), "==", "Bar", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.pageTitle), "==", "Bar", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.pageTitle), "==", "Table", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.pageTitle), "==", "Table", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.pageTitle), "==", "Area", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.pageTitle), "==", "Area", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = (helper = helpers.ifCond || (depth0 && depth0.ifCond),options={hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.pageTitle), "==", "Purchase", options) : helperMissing.call(depth0, "ifCond", (depth0 && depth0.pageTitle), "==", "Purchase", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["Handlebars"]["templates"]["topnav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<a href=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n	";
  return buffer;
  }

  buffer += "<nav id=\"topnav\">\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.navPages), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</nav>";
  return buffer;
  });