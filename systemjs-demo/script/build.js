#!/usr/bin/env node

var Builder = require("systemjs-builder");

var builder = new Builder('.', 'src/systemjs.config.js');

var babelConfig = {
  transpiler: "plugin-babel",
  babelOptions: {

  },
  map: {
    "plugin-babel": "npm:systemjs-plugin-babel/plugin-babel.js",
    "systemjs-babel-build": "npm:systemjs-plugin-babel/systemjs-babel-node.js",
  }
}

builder.config(babelConfig);

builder
  .bundle('src/utils/*.js', 'dist/utils.js')
  .then(() => console.log("Complete"))
  .error((error) => {
    console.log("Build error");
    console.error(error);
  });

builder
  .bundle('react + react-dom + immutable', 'dist/vendor.js')
  .then(() => console.log("Complete"))
  .error((error) => {
    console.log("Build error");
    console.error(error);
  });
