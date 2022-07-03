/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

const APP_TITLE = "react-boilerplate"

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    static: './dist',
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
      title: APP_TITLE,
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};
