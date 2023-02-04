function assert(value, desc) {
    var results = document.getElementById("results");
    if (results==null){
        results=document.createElement("ul");
        document.body.appendChild(results);
    }
    var li = document.createElement("li");
    li.style.color = value ? "green" : "red";
    li.appendChild(document.createTextNode(desc));
    results.appendChild(li);
}

function report(message) {
    assert(true, message);
}

function fail(message) {
    assert(false, message);
}

function pass(message) {
    assert(true, message);
}

function getJSON(url) {
    // 创建并返回一个新的Promise对象
    return new Promise((resolve, reject) => {
        // 创建一个XML Httprequest对象
        const request = new XMLHttpRequest();

        // 初始化请求
        request.open("GET", url);

        // 注册一个onload方法，当服务器响应后会被调用
        request.onload = function () {
            try {
                // 即使服务正常响应也并不意味着一切如期发生
                // 只有当服务端返回的状态码为200（一切正常）时，
                // 再使用服务端的返回结果
                if (this.status === 200) {
                    // 尝试解析JSON字符串，倘若解析成功则执行resolve，并将解析后的对象作为参数传入
                    resolve(JSON.parse(this.response));
                } else {
                    reject(this.status + " " + this.statusText);
                }
            } catch (e) {
                // 如果服务器返回了不同的状态码或是解析JSON字符串时发生异常，则reject
                reject(e.message);
            }
        }

        request.onerror = function () {
            // 如果和服务器端通信过程中发生了错误，则reject
            reject(this.status + " " + this.statusText);
        }

        request.send();
    })
}

