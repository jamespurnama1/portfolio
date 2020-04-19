const path = require('path');
var webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: "my-library",
    libraryTarget: "umd"
  },
  // optimization: {
  //   SplitChunks: {
  //     chunks: 'all',
  //   },
  // },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader',
      //   ],
      // },
      {
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
        }, ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '/fonts/[name].[ext]',
          },
        }, ]
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }
      ]
      }
    ],
  },
  devtool: false,
  resolve: {
    alias: {
      "jquery": path.resolve('node_modules', "jquery/src/jquery.js"),
      "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
    },
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({})
  ]
};
