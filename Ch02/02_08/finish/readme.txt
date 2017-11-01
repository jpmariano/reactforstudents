Webpack 1 vs Wbepack 3 
2. Install babel dependency 
    "babel-core": "6.25.0",
    "babel-loader": "7.1.1",
    "babel-preset-env": "1.6.0", //catch all 25,2016,2017 
    "babel-preset-react": "6.24.1", 

3. Create webpack.config.js 
var webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js"
	},
	module: {
		rules: [ //webpack version 3 features 
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["env", "react"]
				}
			}
		]
	}
}

4. create .babelrc 
5. run webpack 