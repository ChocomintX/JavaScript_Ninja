// 在模块最后一行导出

const ninja = "Yoshi";
const message = "Hello";
function sayHiToNinja() {
    return message + " " + ninja;
}

// 将所有的模块标识符全部导出
export { message, sayHiToNinja };