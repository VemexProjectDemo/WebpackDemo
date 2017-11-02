## 项目介绍

掩饰如何自定定义一个loader，用户处理一个简单的模版文件.

    项目中为了说明loader的处理功能，尽可能少的引用库处理，所以模版中的文件不支持换行，也没有绑定函数之列的处理。


## 原理简介
/app/template/hello.temp 是一个模版文件,
使用`const temp = require("simple-temp-loader!../template/hello.temp")`加载模版，temp变量其实就是模版中原来的字符。

在loader的处理原理就是将不能直接被加载的自负，包装成可以被加载的字符，所以在loader的函数中返回一个标准的nodejs文件结构即可。可以为一个简单的字符，也可以是一个复杂的对象函数。
