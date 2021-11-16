/**
 * COMMON WEBPACK CONFIGURATION
 */

import path from 'path';
import webpack from 'webpack';

module.exports = (options: any) => {
    return {
        mode: options.mode,
        entry: options.entry,
        output: Object.assign(
            {
                // Compile into js/build.js
                path: path.resolve(process.cwd(), 'build'),
                publicPath: 'bundle.js',
            },
            options.output,
        ), // Merge with env dependent settings
        optimization: options.optimization,
        module: {
            rules: [
                {
                    test: /\.(ts|ts)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                        },
                    },
                },
                {
                    // Preprocess our own .css files
                    // This is the place to add your own loaders (e.g. sass/less etc.)
                    // for a list of loaders, see https://webpack.js.org/loaders/#styling
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    // Preprocess 3rd party .css files located in node_modules
                    test: /\.css$/,
                    include: /node_modules/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(eot|otf|ttf|woff|woff2)$/,
                    use: 'file-loader',
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'svg-url-loader',
                            options: {
                                // Inline files smaller than 10 kB
                                limit: 10 * 1024,
                                noquotes: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                // Inline files smaller than 10 kB
                                limit: 10 * 1024,
                            },
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    enabled: false,
                                    // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                                    // Try enabling it in your environment by switching the config to:
                                    // enabled: true,
                                    // progressive: true,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                },
                                pngquant: {
                                    quality: '65-90',
                                    speed: 4,
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.html$/,
                    use: 'html-loader',
                },
                {
                    test: /\.(mp4|webm)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                },
            ],
        },
        plugins: options.plugins.concat([
            // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
            // inside your code for any environment checks; Terser will automatically
            // drop any unreachable code.
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'development',
            }),

            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                    RUN_MODE: JSON.stringify(process.env.RUN_MODE),
                },
            }),
        ]),
        resolve: {
            modules: ['node_modules', 'app'],
            extensions: ['.ts', '.tsx', '.js'],
            mainFields: ['browser', 'jsnext:main', 'main'],
        },
        devtool: options.devtool,
        target: 'web', // Make web variables accessible to webpack, e.g. window
        performance: options.performance || {},
        devServer: options.devServer,
    };
};