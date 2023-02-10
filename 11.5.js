// 从Ninja.js模块中导出

const ninja = "Yoshi";  // 在模块中定义一个顶级变量
export const message = "Hello";
export function sayHiToNinja() {
    return message + " " + ninja;
}