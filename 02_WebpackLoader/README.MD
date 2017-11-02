此示例将演示如何使用Loader构建Saas的应用

此项目依赖：css-loader|sass-loader|style-loader|file-loader|node-sass|url-loader|webpack

在项目中，sass的处理依赖js文件require定义按需处理，并以管道处理的方式处理sass文件，同时在处理sass文件时，遇到png等url定义的资源问题，使用urllodaer动态处理，并按需处理

项目中css文件将使用内联样式的由js动态插入方式生成


