module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        plugins: ['transform-class-properties'],
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.(scss|sass)$/,
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
                }
            ]
        }
};