const path = require("path");
const copy = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = (env, args) => {
    const mode = args.mode ?? 'production';

    return {
        mode,
        entry: {
            index: `./src/index.ts`,
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: "all"
            }
        },
        devtool: mode === "development" ? "source-map" : undefined,
        module: {
            rules: [{
                    test: /\.ts$/,
                    loader: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        // "style-loader",
                        "css-loader",
                        // "resolve-url-loader",
                        "sass-loader"
                    ]
                },
                // {
                //     test: /\.hbs$/,
                //     loader: 'handlebars-loader',
                //     options: {
                //         precompileOptions: {
                //             knownHelpersOnly: false,
                //         },
                //     }
                // },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: '[hash][ext][query]'
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: '[hash][ext][query]'
                    }
                },
            ]
        },
        plugins: [
            // new WebpackPwaManifest({
            //     publicPath: './',
            //     description: "Portfolio 3",
            //     display: "standalone",
            //     name: "Portfolio 3",
            //     short_name: "Portfolio 3",
            //     start_url: "/port3/index.html",
            //     icons: [
            //         { src: "./assets/android-chrome-192x192.png", sizes:"192x192",type: "image/png"},
            //         { src: "./assets/android-chrome-512x512.png", sizes:"512x512",type: "image/png"}
            //     ]
            // }),
            new HtmlWebpackPlugin({
                title: 'CVD 3',
                // favicon: './assets/favicon.ico'
                // manifest: './manifest.webmanifest'
            }),
            new MiniCssExtractPlugin({
                filename: mode === "development" ? '[name].css' : '[name].[fullhash].css',
            }),
            // new copy({
            //         patterns: [
            //             {
            //                 from: `./src/data.json`,
            //                 to: "data.json"
            //             },
            //         ]
            //     }
            // )
        ],
        resolve: {
            extensions: [".ts", ".js"],
            modules: [
                path.resolve("./src"),
                path.resolve("./node_modules")
            ]
        },
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
        }
    }
};