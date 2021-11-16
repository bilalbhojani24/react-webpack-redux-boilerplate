import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = require('./webpack.base.config')({
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new HotModuleReplacementPlugin(),
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, '/'),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: true,
        client: {
            logging: 'warn',
            overlay: {
                errors: true,
                warnings: false,
            },
            reconnect: true,
        },
    },
    stats: {
        assets: false,
        logging: 'warning',
    },
});
