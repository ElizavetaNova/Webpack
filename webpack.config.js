const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: './src/typescript/index.ts',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },                
            {
                test: /\.s*css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],

    mode: 'development'
}