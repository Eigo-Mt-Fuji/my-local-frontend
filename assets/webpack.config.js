const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function(env, argv) {

    return {
        mode: argv.mode === 'production' ? "production" : "development",
        entry: './src/app.ts',
        output: {
            path: __dirname + "/js/",
            filename:   'app.bundle.js'
        },
        devtool: argv.mode === 'production' ? false : "source-map",
        module: {
            rules: [
                {
                    test: /\.vue.html$/,
                    loader: 'html-loader',
                    exclude: /node_modules/,
                    options: {
                        minimize: true
                    }
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                }
            ]
        },
        // import 文で .ts ファイルを解決するため
        resolve: {
            extensions: ['.ts', '.js', '.vue'],
            // Webpackで利用するときの設定
            alias: {
                vue: 'vue/dist/vue.js'
            }
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: __dirname + "/js/",
                    to: __dirname + "/../public/js",
                },
                {
                    from: __dirname + "/css/",
                    to: __dirname + "/../public/css",
                },
                {
                    from: __dirname + "/node_modules/vue-material/dist/theme/default.css",
                    to: __dirname + "/../public/css/vue-material/dist/theme/default.css",
                },
                {
                    from: __dirname + "/node_modules/vue-material/dist/vue-material.min.css",
                    to: __dirname + "/../public/css/vue-material/dist/vue-material.min.css",
                },
                {
                    from: __dirname + "/node_modules/material-icons/css",
                    to: __dirname + "/../public/css/material-icons/css",
                },
                {
                    from: __dirname + "/node_modules/material-icons/iconfont",
                    to: __dirname + "/../public/css/material-icons/iconfont",
                },
            ])
        ]
    };
};
