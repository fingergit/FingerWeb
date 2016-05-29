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

/**
 * 判断两个数是否相等。
 * @param a
 * @param b
 * @returns {boolean}
 */
function isEqual(a, b) {
    return Math.abs(a - b) < 0.0000001;
}

function isObject(obj) {
    return (typeof obj === "object");
}

/**
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
msie = document.documentMode;


/**
 * @private
 * @param {*} obj
 * @return {boolean} Returns true if `obj` is an array or array-like object (NodeList, Arguments,
 *                   String ...)
 */
function isArrayLike(obj) {
    if (obj == null || isWindow(obj)) {
        return false;
    }

    var length = obj.length;

    if (obj.nodeType === NODE_TYPE_ELEMENT && length) {
        return true;
    }

    // in用法: 
    // 变量 in 对象:......注意，，，
    // 当“对象”为数组时，“变量”指的是数组的“索引”；
　　// 当“对象”为对象是，“变量”指的是对象的“属性”。
    return isString(obj) || isArray(obj) || length === 0 ||
        typeof length === 'number' && length > 0 && (length - 1) in obj;
}

var isArray = Array.isArray;
