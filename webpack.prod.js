const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const buildPath = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
  }]
},
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
     }),
  ],
  optimization: {
    minimizer: [
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
        }),
        new OptimizeCssAssetsPlugin({})
    ]
}
});
