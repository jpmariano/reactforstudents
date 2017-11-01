1. finish/src/lib.js
2. finish/src/stylesheets/hello.css
3. finish/src/stylesheets/goodbye.scss
4. Add Loader to config 
{
    test: /\.css$/,
    loader: 'style-loader!css-loader!autoprefixer-loader'
    },
    {
    test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
}
5. 