var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		myApp: "./app/main.js",
	},
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: __dirname + '/build',
    filename: "[name]-[hash].js"
	},
	watch: true,
	module: {
    rules: [
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')},
      {test: /\.json$/, loader: "json-loader" },
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: {
          plugins: () =>[autoprefixer]
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[hash].css")
  ],
	resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
		modules: [
		 	"node_modules"
	 	],
	}
}
