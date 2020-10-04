const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/main.js'
  },
  resolve: {
    // see below for an explanation
    alias: {
      svelte: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
    optimization:{
        splitChunks:{
            chunks:'all',
            minSize:10000,
            automaticNameDelimiter:'_'

        }
    },
  
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(
      { filename: '[name].[contenthash].css'}
  ),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
	'meta': {
		'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
		// Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		'theme-color': '#ACB6E5',
		},
	  'title': 'Banner Studio',
	  'favicon' : 'favicon/icon.png'
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/prod/'),
  }
};