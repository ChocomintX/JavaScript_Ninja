// Ninja.js的默认导出
export default class Ninja { // 使用export default关键字定义模块的默认导出
    constructor(name) {
        this.name = name;
    }
}

// 使用默认导出的同时，我们还可以指定导出的名称
export function compareNinjas(ninja1, ninja2) {
    return ninja1.name === ninja2.name;
}