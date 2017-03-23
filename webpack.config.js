/*
* @Author: Administrator
* @Date:   2016-07-19 15:31:23
 * @Last Modified by: fengyun2
 * @Last Modified time: 2017-03-23 12:58:24
*/
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  debug: true,
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: "./src",
    lazy: false,
    stats: { colors: true, cached: false, cachedAssets: false },
    port: 8001
  },
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:8001',
    path.resolve(__dirname, "src/index.tsx")
    // path.resolve(__dirname, 'src/test.js')
  ],
  output: {
    filename: "./dist/bundle.js"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    //   { test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "typed-css-modules"
        // or in case you want to use parameters:
        // loader: 'typed-css-modules?outDir=/tmp'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
    }
    ],
    loaders: [
      {
        test: /\.css$/,
        // loader: [
        //   'style-loader',
        //   'css-loader?modules&importLoaders=1',
        //   'typed-css-modules-loader',
        // ],
        loader: "style-loader!css-loader?modules&importLoaders=1!typed-css-modules-loader"
      },
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader"
      },

    ]

  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    // "react": "React",
    // "react-dom": "ReactDOM"
  },
  plugins: [
    /*    new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),*/
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: "index.html",
      inject: "body"
    }),
    function() {
      return this.plugin("done", function(stats) {
        var content;
        content = JSON.stringify(stats.toJson().assetsByChunkName, null, 2);
        console.log("版本是：" + JSON.stringify(stats.toJson().hash));
      });
    },
    new OpenBrowserPlugin({ url: "http://localhost:8001" })
  ]
};
