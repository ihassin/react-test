var webpack = require('webpack');

module.exports = {
    entry: [
        "./index.jsx",
        "./index.html",
    ],

    output: {
        filename: "index.js",
        path: __dirname + "/dist",
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/, },
            { test: /\.html$/, loader: "file?name=[name].[ext]", },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192', exclude: /node_modules/, },
        ],
    }
}
