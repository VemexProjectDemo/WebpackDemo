const temp = require("simple-temp-loader!../template/hello.temp")
function parseDom(arg) {
    var objE = document.createElement("div");
    objE.innerHTML = arg;
    return objE.children[0];
}
document.getElementById("root").appendChild((parseDom(temp)));