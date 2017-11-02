/**
 * 
 * 
 * 公共变量变量说明
 * __dirname:指向当前目录，在未设置context未指明的情况下，指向当前执行目录，否则指向设定目录
 * 
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    /**
     * 设置编译入口文件，webpack加载此文件开始分析依赖，编译输出
     */
    entry: __dirname + "/app/js/main.js",
    output: { 
        path: __dirname + "/dist/assets/js", 

        publicPath:"assets/js",
        
        filename: "bundle.js"
    },

    plugins: [ 
        new HtmlWebpackPlugin({
            filename: '../../index.html',
            template: __dirname + "/app/index.html"
        })
    ]
};