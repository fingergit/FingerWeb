/*
 * Copyright (c) 2016 Joytoyboy
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// 对于"http://war.163.com/photoview/4T8E0001/119519.html#p=BO2F28BG4T8E0001"
// href: "http://war.163.com/photoview/4T8E0001/119519.html#p=BO2F28BG4T8E0001"
// hostname: war.163.com
// port: ""
// protocol: "http:"
// pathname: "/photoview/4T8E0001/119519.html"
// location.search; // '?a=1&b=2'
function curUrl() {
    return location.href;
}

function curPort() {
    return location.port;
}

function curHostName() {
    return location.hostname;
}

/**
 * 返回所使用的 web 协议（http:// 或 https://）
 * @returns {string} web 协议("http:"或"https:")
 */
function protocol() {
    return location.protocol;
}

/**
 * 返回相对于host的子路径。如对于"http://war.163.com/photoview/4T8E0001/119519.html#p=BO2F28BG4T8E0001"，返回"/photoview/4T8E0001/119519.html"。
 * @returns {string}
 */
function curPathname() {
    return location.pathname;
}

function goto(url) {
    // 以下三种方法之一。在replace之后，历史记录中不会有替换前的页面记录（href与assign方法会产生历史记录）。
    location.href='http://www.example.com';
    // location.assign('http://www.example.com');
    // location.replace('http://www.example.com');
}

function refresh() {
    // reload(bForceGet)， 可选参数， 默认为 false，从客户端缓存里取当前页。true, 则以 GET 方式，从服务端取最新的页面, 相当于客户端点击 F5("刷新")
    location.reload();
    // history.go(0); 这样也可以。
}