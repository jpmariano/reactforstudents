Webpack - bundler 

1. Creaete webpack configuration 
var webpack = require("webpack");
module.exports = {
	entry: "./src/index.js", //Entry Point
	output: {
		path: "dist/assets",
		filename: "bundle.js", //Output 
		publicPath: "assets"
	},
	devServer: { //enable hot reloading see step 5 
		inline: true,
		contentBase: './dist', //where the files are located
		port: 3000
	},
	module: { 
		loaders: [  //webpack has tons of loader 
			{
				test: /\.js$/, //reads all the .js 
				exclude: /(node_modules)/, //Do not include node_modules 
				loader: ["babel-loader"], //loader 
				query: { //tells the webpack how the babel should transpile 
					presets: ["latest", "stage-0", "react"]
				}
			}
		]
	}
}

2. Install webpack globally 
sudo install -g webpack@1.13.3 

3. Run 
webpack or np

4. make sure to repoint your app to the right js <script type="text/javascript" src="assets/bundle.js"></script> 

5. Enable hot reloading from package.json 
"start": "./node_modules/.bin/webpack-dev-server"