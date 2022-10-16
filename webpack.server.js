const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './server/index.js',
    output: {
        path: path.join(__dirname, 'server_dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    }
}