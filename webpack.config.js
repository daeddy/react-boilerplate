/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].[contenthash].bundle.js",
    publicPath: "/",
    clean: true,
  }, 
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Tanslation Manager",
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
};
