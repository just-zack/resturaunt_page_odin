const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Script } = require("vm");
const { type } = require("os");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    menu: "./src/menu.js",
    contact: "./src/contact.js",
    about: "./src/about.js",
    home: "./src/home.js",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello Food",
      template: "src/template.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    open: true,
    hot: true,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
