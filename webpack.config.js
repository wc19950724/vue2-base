// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { AutoImportPlugin } = require("auto-import-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const packageJson = require("./package.json");

module.exports = (env, { mode }) => ({
  mode,
  entry: "./src/main.js",
  output: {
    clean: true,
    chunkFilename: "js/[name].[contenthash].js",
    filename: "js/[name].[contenthash].js",
    assetModuleFilename: "[ext]/[name].[contenthash].[ext]",
    path: path.resolve(__dirname, "dist"),
  },
  performance: {
    hints: mode === "production" && "warning",
    maxEntrypointSize: 1024 * 1024, // 1 MiB
    maxAssetSize: 244 * 1024, // 244 KiB
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: false,
    host: "localhost",
    client: {
      logging: "warn",
    },
  },
  stats: {
    excludeModules: /node_modules/,
    modules: false,
  },
  resolve: {
    // 添加对 .vue 文件的解析
    extensions: [".js", ".jsx", ".vue", ".less", ".css"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
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
    mode === "production" &&
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[name].[contenthash].css",
      }),
    new AutoImportPlugin({
      entry: "./src",
      output: "./src/plugins/element-ui.js",
      library: "element-ui",
      logLevel: false,
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ].filter(Boolean),
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      "...",
      mode === "production" && new CssMinimizerPlugin(),
    ].filter(Boolean),
  },
  module: {
    rules: [
      // 添加处理 .vue 文件的 loader 配置
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            "@babel/plugin-syntax-dynamic-import",
            [
              "component",
              {
                libraryName: "element-ui",
                styleLibraryName: "theme-chalk",
              },
            ],
          ],
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
        test: /\.(css|less)$/i,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
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
  devtool: mode === "development" && "eval-cheap-module-source-map",
});
