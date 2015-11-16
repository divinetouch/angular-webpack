var path = require('path');

module.exports = {
    context: path.resolve('app'), 
    entry: './index.js',
    output: {
        path: path.resolve('dist/js/'),
        publicPath: 'js/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/,/bower_components/],
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|svg|eot|ttf|svg|woff|woff2)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};

