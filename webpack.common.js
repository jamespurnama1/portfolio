const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: {
    main: './src/js/main.js',
    about: './src/js/about.js',
    jtc: './src/js/jtc.js',
    sagoo: './src/js/sagoo.js',
    tremors: './src/js/tremors.js',
    bbw: './src/js/bbw.js',
    publication: './src/js/publication.js',
    accha: './src/js/accha.js'
  }, 
  module: {
    rules: [
      {
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
      {
        test: /\.(png|svg|jpe?g|gif|ico|webm|webp|mp4)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: './src/'
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
      "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
      "lazysizes": path.resolve('node_modules', "lazysizes/lazysizes.js"),
      "smooth-scrollbar": path.resolve('node_modules', "smooth-scrollbar/index.js")
    },
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   inject: 'body',
    //   chunks: ['main'],
    //   filename: 'index.html'
    // },
    // new HtmlWebpackPlugin({
    //   template: './src/jtc.html',
    //   inject: 'body',
    //   chunks: ['jtc'],
    //   filename: 'jtc.html'
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/sagoo.html',
    //   inject: 'body',
    //   chunks: ['sagoo'],
    //   filename: 'sagoo.html'
    // }),
    // new HtmlWebpackPlugin({
    //   template: './src/bbw.html',
    //   inject: 'body',
    //   chunks: ['bbw'],
    //   filename: 'bbw.html'
    // })
    // )
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: "my-library",
    libraryTarget: "umd"
  }
};
