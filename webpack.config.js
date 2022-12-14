const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const {LocalStorage} = require("node-localstorage");


module.exports = {
  mode: "none",
  entry: {
    main: ["@babel/polyfill", "./src/app/scripts/main.js"],
    home: ["@babel/polyfill", "./src/app/scripts/home.js"],
    register: ["@babel/polyfill", "./src/app/scripts/register.js"]
    
  },
  output:{
    filename: 'js/[name].bundle.js',
    path: path.join(__dirname, 'public', 'scripts'),
    chunkFilename: '[id].[chunkhash].js'
},

  devServer: {
    port: 5501,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      hash: true,
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new HTMLWebpackPlugin({
      hash: true,
      template: "./src/home.html",
      filename: "home.html",
      chunks: ["home"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new HTMLWebpackPlugin({
      hash: true,
      template: "./src/register.html",
      filename: "register.html",
      chunks: ["register"],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/app.bundle.css",
    }),
  ],
};