// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const { ProgressPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const AutoImportPlugin = require("auto-import-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const packageJson = require("./package.json");

const config = {
  entry: "./src/main.js",
  output: {
    clean: true,
    chunkFilename: "js/[name].[contenthash].js",
    filename: "js/[name].[contenthash].js",
    assetModuleFilename: "[ext]/[name].[contenthash].[ext]",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  performance: {
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
    historyApiFallback: true,
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
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      "...",
    ],
  },
  plugins: [
    new ProgressPlugin(),
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
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
    }),
    new AutoImportPlugin({
      entry: "./src",
      output: "./src/plugins/element-ui.js",
      resolvers: "element-ui",
      logLevel: "none",
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
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
        ],
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "less-loader",
            options: { sourceMap: true },
          },
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
    config.performance.hints = "warning";
    config.plugins.push();
  } else if (mode === "development") {
    config.performance.hints = false;
    config.devtool = "eval-cheap-module-source-map";
  }
  return config;
};
