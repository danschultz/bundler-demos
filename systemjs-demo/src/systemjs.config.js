System.config({
  transpiler: "babel",
  baseURL: "/",
  defaultJSExtensions: true,
  meta: {

  },
  packages: {
    "demo": {

    }
  },
  paths: {
    "demo/": "src/"
  },
  bundles: {
    "dist/main.js": ["src/main.js", "src/views/app.js"],
    "dist/utils.js": ["src/utils/geom.js", "src/utils/math.js"],
  },
  map: {
    "immutable": "node_modules/immutable/dist/immutable.js",
    "react": "node_modules/react/dist/react.js",
    "react-dom": "node_modules/react-dom/dist/react-dom.js",
  }
});
