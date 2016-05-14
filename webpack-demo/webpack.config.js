var webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/main.js",
    vendor: ["react", "react-dom", "immutable"]
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    libraryTarget: "amd"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: 'node_modules',
        loader: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.bundle.js"})
  ]
};
