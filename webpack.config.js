const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: `${__dirname}/src/index.js`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: [
              /node_modules/
            ]
          },
          {
            test: /\.(sass|scss)$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: ExtractCssChunks.loader
            },
            {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
          }
        ]
    },
    devtool: false,
    plugins: [
     new HtmlWebpackPlugin({
         template: `${__dirname}/index.html`,
         inject: 'body'
     }),
     new ExtractCssChunks({
      filename: "[name].css",
      chunkFilename: "[id].css",
      hot: true
      }),
     new webpack.SourceMapDevToolPlugin({})
    ],
    devServer: {
      contentBase: './src',  //source of static assets
      port: 7000, // port to run dev-server
  }
};
