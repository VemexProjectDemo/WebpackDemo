/**
 * 
 * 
 * 公共变量变量说明
 * __dirname:指向当前目录，在未设置context未指明的情况下，指向当前执行目录，否则指向设定目录
 * 
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    /**
     * 设置编译入口文件，webpack加载此文件开始分析依赖，编译输出
     */
    entry: __dirname + "/app/js/main.js",
    output: {
        /**
         * 设定编译输出的跟目录
         * 目录一般设置为build|target/www|www|dist/asserts/js
         * 一般的设置规则
         * 当只需要输出js设定build
         * 当使用纯HTML开发过程中可以设定为/dist/assets/js
         * 当作为web项目发布为/target/www
         */
        path: __dirname + "/dist/assets/js", //目录一般设置为“www,target/www, build”，主要用于设定编译输出目录
        /**
         * 指定相默认静态资源目录根目录，可以为绝对路径，也可以是相对路径,一般依据时间的输出目录的结构来设定。
         * 如果作为HTML项目，请根据HMTL所有目录和JS所在目录设定相对地址，HtmlWebpackPlugin将默认使用此地址作为根目录替换HTMl的资源引用地址。
         * 
         * 目录结构说明
         * +/app/
         *  |++/css/
         *  |++|++/hello.css
         *  |++|++/main.css
         *  |++/img/
         *  |++|++/webpack.png
         *  |++/js/
         *  |++|++/main.js
         *  |++/index.html
         *  |/dist/
         *  |++/assets/  #最终的目录输出结构，bundle.js 和 index.html 的相对目录为 assets/js，所以此处设置为assets/js
         *  |++|++/css/
         *  |++|++|++/main.css
         *  |++|++/img/
         *  |++|++|++/[hash].jpg
         *  |++|++/js/
         *  |++|++|++/bundle.js
         *  |++|++/index.html  
         * 
        publicPath: "assets/js",
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
            /**
             * 此出的ouputPath使用相对于output/path的地址来设定。在资源路径合并时，会将publicPath和outputPath合并做为资源引用地址。 
             * 在main.css 使用 图片资源的地址应该为 ../img/[hash].png  除去 ../img, 所以publicPath应该设置为./ ,表示当前目录
             * +/dist/
             *  |++|assets/  
             *  |++|++/css/
             *  |++|++|++/main.css
             *  |++|++/img/
             *  |++|++|++/[hash].jpg  #main.js 和 img 相对路径为 ../img 
             *  |++|++/js/
             *  |++|++|++/bundle.js
             *  |++|++/index.html  
             * 
             */
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&outputPath=../img/&publicPath=./'　　　　
            }
        ]
    },

    plugins: [
        /**
         * 使用HtmlWebpackPlugin输出HTML文件
         */
        new HtmlWebpackPlugin({
            /**
             * filename:相对outpath/path的文件路径
             * +/dist/
             *  |++/assets/  
             *  |++|++/css/
             *  |++|++|++/main.css
             *  |++|++/img/
             *  |++|++/++/[hash].jpg 
             *  |++|++/js/
             *  |++|++|++/bundle.js
             *  |++|++/index.html # index.html和bundle.js的相对目录为 ../../ 
             * 
             */
            filename: '../../index.html',
            template: __dirname + "/app/index.html"
        }),
        /**
         * 使用相对输出js的路径来设定
         */
        new ExtractTextPlugin("../css/[name].css")
    ]
};