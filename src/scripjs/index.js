"use strict";

var _fields = require("./components/fields.js");
var _ProjectsList = require("./components/ProjectsList.js");
new _fields.Fields();
new _ProjectsList.ProjectList("Initial");
new _ProjectsList.ProjectList("Active");
new _ProjectsList.ProjectList("Finished");