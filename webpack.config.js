const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { resolveTsAliases } = require("resolve-ts-aliases");

const isProd = process.env.NODE_ENV === "production";

console.log({ e: process.env.NODE_ENV, __dirname });

const config = {
  mode: isProd ? "production" : "development",
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: resolveTsAliases(__dirname + "/tsconfig.json")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()]
  };
} else {
  config.devServer = {
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true,
    historyApiFallback: true
  };
}

module.exports = config;
