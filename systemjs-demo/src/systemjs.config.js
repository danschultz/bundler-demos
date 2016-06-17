System.config({
  transpiler: "babel",
  baseURL: "/",
  defaultJSExtensions: true,
  meta: {
    "immutable": {format: "cjs"},
    "react": {format: "cjs"},
    "react-dom": {format: "cjs"}
  },
  packages: {
    "demo": {

    }
  },
  paths: {
    "demo/": "src/",
    "npm:*": "node_modules/*"
  },
  bundles: {
    "dist/main.js": ["src/main.js", "src/views/app.js"],
    "dist/utils.js": ["src/utils/geom.js", "src/utils/math.js"],
    "dist/vendor.js": [
      "npm:react/dist/react.js",
      "npm:react-dom/dist/react-dom.js",
      "npm:immutable/dist/immutable.js"
    ]
  },
  map: {
    "immutable": "npm:immutable/dist/immutable.js",
    "react": "npm:react/dist/react.js",
    "react-dom": "npm:react-dom/dist/react-dom.js",
  }
});
