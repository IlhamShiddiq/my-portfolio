const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
 
module.exports = {
    entry: "./src/scripts/main/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/templates/index.html",
            filename: "index.html"
        }),
        new CopyPlugin({
            patterns: [
                {from: "src/static", to: "src/static"}
            ],
        }),
        new FaviconsWebpackPlugin({
            logo: './src/static/images/favicon.svg',
            cache: true,
        }),
        new CleanWebpackPlugin(),
    ]
}