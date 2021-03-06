import path from "path";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import HtmlWebpackPlugin from "html-webpack-plugin";
// import PrerenderSPAPlugin from "@dreysolano/prerender-spa-plugin";

process.stdout.write(`Building for ${process.env.NODE_ENV}...\n`);

const isDevelopment = process.env.NODE_ENV === "development";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const configuration: Configuration = {
  entry: "./src/index.tsx",
  target: "web",
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-cheap-module-source-map" : "source-map",
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      pages: path.resolve(__dirname, "src", "pages"),
      components: path.resolve(__dirname, "src", "components"),
      theme: path.resolve(__dirname, "src", "theme"),
      store: path.resolve(__dirname, "src", "store"),
      services: path.resolve(__dirname, "src", "services"),
      assets: path.resolve(__dirname, "src", "assets"),
      config: path.resolve(__dirname, "src", "config"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "src/assets/images/favicon.png",
    }),
    // new PrerenderSPAPlugin({
    //   staticDir: path.join(__dirname, "dist"),
    //   routes: ["/"],
    // }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};

export default configuration;
