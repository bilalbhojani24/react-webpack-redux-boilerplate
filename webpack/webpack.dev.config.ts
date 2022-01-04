import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin({
    outputFormat: 'human',
});

const devWebpack = require('./webpack.base.config')({
    mode: 'development',
    entry: {
        app: path.join(process.cwd(), 'src/index.tsx'),
        hot: 'webpack/hot/dev-server.js',
        client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/',
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'Hot Module Replacement',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: path.join(__dirname, '/'),
        historyApiFallback: true,
        port: 4000,
        open: true,
        hot: false,
        client: false,
    },
    stats: {
        assets: false,
        logging: 'warning',
    },
});

module.exports = smp.wrap(devWebpack);
