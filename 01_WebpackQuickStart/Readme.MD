## 文件结构说明

    +/app/                  # 开发代码目录  
    |++/css/               # CSS样式目录  
    |++|++/hello.css       # hello.js 使用的css  
    |++|++/main.css        # main.js  使用的css  
    |++/img/               # 图片资源目录  
    |++|++/webpack.png     # 示例图片  
    |++/js/                # JS代码目录  
    |++|++/main.js         # main.js 代码  
    |++|++/hello.js        # hello.js 代码  
    |++/index.html         # 主页HTML  
    |/dist/                # 输出目录  
    |++/assets/            # 所有js、img、css的根目录  
    |++|++/css/            # 输出css根目录  
    |++|++|++/main.css     # main.css输出文件  
    |++|++/img/            # 输出图片的根目录  
    |++|++|++/[hash].jpg   # 输出示例图片  
    |++|++/js/             # 输出js根目录  
    |++|++|++/bundle.js    # 输出的js文件  
    |++|++/index.html      # 输出的主页文件  

