//jshint esversion:6
// const print = require("./modulesexport");
// print("Hey");

// const func = require("./modulesexport");
// func.print("Hey");
// func.opt("Ho");

const { print, opt } = require("./modulesexport");
print("hey");
opt("ho");
