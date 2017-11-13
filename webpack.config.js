var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
	entry: {
		myApp: "./app/main.js",
	},
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: __dirname + '/build'
	},
	watch: true,
	module: {
    rules: [
      {test: /\.css$/, loader: ["css-loader", "postcss-loader"]},
      {test: /\.json$/, loader: "json-loader" },
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: {
          plugins: () =>[autoprefixer]
        }
      }
    })
  ],
	resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
		modules: [
		 	"node_modules"
	 	],
	},
	devServer: {
    contentBase: './dist',
    port: '3000',
    hot: true
  }
}
