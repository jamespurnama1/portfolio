const path = require('path');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'my-library',
    libraryTarget: 'umd',
  },
  // optimization: {
  //   SplitChunks: {
  //     chunks: 'all',
  //   },
  // },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    },
    {
      test: /\.(png|svg|jpe?g|gif|ico)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '/img/[name].[ext]',
        },
      }],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[ext]',
        },
      }],
    },
    {
      test: /\.js$/,
      loader: 'imports-loader?define=>false',
    },
    {
      test: require.resolve('jquery'),
      use: [{
        loader: 'expose-loader',
        options: 'jQuery',
      }, {
        loader: 'expose-loader',
        options: '$',
      }],
    },
    ],
  },
  resolve: {
    alias: {
      jquery: path.resolve('node_modules', 'jquery/src/jquery.js'),
      TweenLite: path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      TweenMax: path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      TimelineLite: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      TimelineMax: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      ScrollMagic: path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      ScrollMagicGSAP: 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap',
      'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
      vue$: 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      favicon: './favicon.ico',
    }),
  ],
};
