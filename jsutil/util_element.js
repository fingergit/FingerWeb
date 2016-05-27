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
 * 获取当前事件的目标元素。（如鼠标移动时，移动到哪个对象上了。）
 * @param event
 */
function getEventTarget(event) {
    var targ = null;
    var e = event;
    if (!e) {
        e = window.event;
    }
    // IE下,event对象有srcElement属性,但是没有target属性;Firefox下,event对象有target属性,但是没有srcElement属性.但他们的作用是相当的
    if (e.target) {
        targ = e.target;
    }
    else if (e.srcElement) { // e.srcElement: 当前事件的源
        targ = e.srcElement;
    }
    // 1. Element, 2. Attr, 3. Text
    if (targ.nodeType == 3) { // defeat Safari bug
        targ = targ.parentNode;
    }

    return targ;
}

