const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());

function resolvePath(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

module.exports = {
    context: resolvePath('src/'),
    entry: [
        resolvePath('src/index.js'),
    ],
    output: {
        path: resolvePath('build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: resolvePath('src/'),
        port: 7777,
        hot: true,
        inline: false,
        historyApiFallback: true
    },
    resolve: {
        modules: [
            resolvePath('src/'),
            'node_modules',
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: resolvePath('public/index.html')
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: false,
                    plugins: ['transform-class-properties'],
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            importLoaders: 1,
                            localIdentName: '[local]',
                        }
                    },
                    {
                        loader: 'sass-loader',
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
                ],
            },
        ]
    }
};

process.noDeprecation = true;