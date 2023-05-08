// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const { ProgressPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const packageJson = require("./package.json");

const config = {
  entry: "./src/main.js",
  output: {
    clean: true,
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: false,
    host: "localhost",
    client: {
      logging: "warn",
    },
    historyApiFallback: true,
  },
  stats: {
    excludeModules: /node_modules/,
    modules: false,
  },
  resolve: {
    // 添加对 .vue 文件的解析
    extensions: [".js", ".jsx", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      filename: "js/[name]/[name].[contenthash].js",
    },
  },
  plugins: [
    new ProgressPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      minify: false,
      template: "index.html",
      inject: "body",
      templateParameters: {
        title: packageJson.name,
        description: packageJson.description,
        keywords: packageJson.keywords,
      },
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      // 添加处理 .vue 文件的 loader 配置
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
        options: {
          plugins: ["@babel/plugin-syntax-dynamic-import"],
          presets: [
            [
              "@babel/preset-env",
              {
                modules: false,
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = (env, { mode }) => {
  config.mode = mode;
  console.log(mode);
  if (mode === "production") {
    config.plugins.push();
  } else if (mode === "development") {
    config.devtool = "eval-cheap-module-source-map";
  }
  return config;
};
