var path = require("path");
module.exports = {
    context: __dirname+ "/app",//基本程序目录
    entry: {
        app: ["./main.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/app/public/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};