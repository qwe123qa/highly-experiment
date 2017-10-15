var path = require('path');

module.exports = {
    entry: './components/all.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                // options: {
                //     modules: true
                // }
            }, {
                loader: 'autoprefixer-loader',
                options: {
                    browsers: [
                        'last 2 versions',
                        'ie >= 9',
                        'and_chr >= 2.3'
                    ]
                }
            }, {
                loader: 'sass-loader'
            }]
        }, {
            test: /\.jsx$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }],
        }]
    },
};