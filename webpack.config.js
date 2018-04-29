
const path = require('path');
// const resolve = require('path').resolve;
const url = require('url');
const process = require('process');

// const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;

const publicPath = '';
/* global __dirname */

module.exports = (options = {}) => ({
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.styl$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                // {
                //     loader: 'postcss-loader'
                //     options: { sourceMap: true }
                // },
                'postcss-loader?sourceMap',
                'stylus-loader'
            ]
            // use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: [{
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1
            //             }
            //         },
            //         'postcss-loader'
            //     ]
            // })
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /(\.jsx|\.js)$/,
            use: [
                'babel-loader',
                'eslint-loader'
            ],
            exclude: /node_modules/
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            title: 'BYRCIRCLE',
            template: 'src/index.html'
        })
    ],
    devServer: {
        host: '127.0.0.1',
        port: 8012,
        // proxy: {
        //     '/api/': {
        //         target: 'http://127.0.0.1:8080',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
        historyApiFallback: {
            index: url.parse(options.dev ? '/static/' : publicPath).pathname
        }
    },
    devtool: options.dev ? '#eval-source-map' : '#source-map',
});