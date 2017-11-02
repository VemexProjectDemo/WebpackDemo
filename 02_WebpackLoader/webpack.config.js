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
    module: {
        loaders: [
            {
            /**
             * 使用正则测试匹配符合规则文件名称
             * 这里匹配.scss 后缀的文件
             */
            test: /\.scss$/,
            /**
             * loader的管道处理：
             * 针对与scss处理，按照tyle-loader!css-loader!sass-loader规则进行管道处理，从后向前一次使用定义的loader处理，使用！分割loader
             *
             * 第一步 使用sassloader 加载处理，编译sass文件输出为css
             * 第二步 使用cssloader加载处理，处理文件中@import和url问题，合并&转化路径 。ref:http://www.css88.com/doc/webpack2/loaders/css-loader/
             * 第三步 使用style loader 加载处理，处理html中引用css的问题，生成style引用标签, 如果不使用style-loader，将不会生成产生style标签的代码
             * 
             */
            loader:'style-loader!css-loader!sass-loader'} ,

            /**
             * 
             * 参数设置：使用？向loader中传递参数
             * 处理说明：当cssloader 处理css文件时遇到Url，会按照此规则输出图片，并且根据输出结果修改css中url的路径引用
             * 输出路径设置：此项目的css是由js在html中生成styles节点，所以此处的publicPath要相对输出出index.html路径来设置
             *
             */
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&outputPath=../img/&publicPath=../dist/assets/js/'　　　　
            }
        ]
    },

    plugins: [ 
        new HtmlWebpackPlugin({
            filename: '../../index.html',
            template: __dirname + "/app/index.html"
        })
    ]
};