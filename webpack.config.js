const path = require('path');
const glob = require('glob');
// console.log(path.normalize());

module.exports = [{
    entry: './src/stylesheet.scss',
    output: {
        // This is necessary for webpack to compile
        // But we never use style-bundle.js
        path: path.resolve(__dirname, 'assets'),
        filename: 'style-bundle.js',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'stylesheet.css',
                    },
                },
                {loader: 'extract-loader'},
                {loader: 'css-loader'},
                {
                    loader: 'sass-loader',
                    options: {
                        includePaths: glob.sync('node_modules').map(function (d) {
                            return path.join(__dirname, d)
                        })
                    }
                },
            ]
        }]
    },
},
    {
        entry: './src/scripts/use-material.js',
        output: {
            path: path.resolve(__dirname, 'assets'),
            filename: 'use-material.js'
        }
    }]
;
