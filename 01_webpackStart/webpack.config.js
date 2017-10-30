/**
 * 
 * 
 * 公共变量变量说明
 * __dirname:指向当前目录，在未设置context未指明的情况下，指向当前执行目录，否则指向设定目录
 * 
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


const extractSass = new ExtractTextPlugin("[name].css")
module.exports = {
    /**
     * 设置编译入口文件，webpack加载此文件开始分析依赖，编译输出
     */
    entry: __dirname + "/app/js/main.js",
    output: {
        /**
         * 设定编译输出目录
         * 目录一般设置为build|target/www|www|dist/asserts
         * 一般的设置规则
         * 当只需要输出js设定build
         * 当使用纯HTML开发过程中可以设定为/dist/assets
         * 当作为web项目发布为/target/www
         */
        path: __dirname + "/dist/assets/js", //目录一般设置为“www,target/www, build”，主要用于设定编译输出目录
        /**
         * 指定相对输出目录的静态资源的目录
         * 目录名称一般设置为public|assets
         */
        publicPath: "/assets/",
        /**
         * 指定输出的文件名称，entry中指定的代码文件将被编译出道 bundle.js 文件中   
         */
        filename: "bundle.js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'　　　　
            }
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            /**
             * 相对outpath/path的文件路径
             */
            filename: '../../index.html',
            template: __dirname + "/app/index.html",
            title: "测试页面"
        }),
        extractSass
    ]
};