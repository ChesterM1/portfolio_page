// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config = {
  entry: "./src/index.js",
  output: {
   path: path.join(__dirname, "dist"),
    filename: 'main.js',
    assetModuleFilename: 'asset/img/[name][ext][query]',
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: 'src/icons/favicon/ms-icon-310x310.png',
      mode: 'webapp',
      devMode: 'webapp',
      prefix: 'asset/favicons/',
      cache: true,
      inject: htmlPlugin =>{
        return true
      }
    }),
    new CleanWebpackPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader",  "sass-loader"], //"postcss-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'style-loader' ,"css-loader"], //, "postcss-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, ///\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i
        type: 'asset/resource',

      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'asset/fonts/[name][ext][query]',
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
