const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("react-dev-utils/InlineChunkHtmlPlugin");

module.exports = {
  css: {
    extract: false,
  },
  chainWebpack: (config) => {
    config.optimization.splitChunks(false);
    config.plugin("html").use(HtmlWebpackPlugin, [
      {
        title: "App",
        template: "public/index.html",
        templateParameters: {
          BASE_URL: "/",
        },
      },
    ]);
    config
      .plugin("inlineChunk")
      .use(InlineChunkHtmlPlugin, [HtmlWebpackPlugin, [/app\..*\.js$/i]]);
  },
};
