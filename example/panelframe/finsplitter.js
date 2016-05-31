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
 * 对窗口中的相邻窗口之间进行拖拽，以改变窗口的大小。本文件依整于jquery库。
 * 通过修改panel的宽高来调整panel的大小。
 * 使用方法：
 */

$(function () {
    var splitter = new FinSplitter();
    splitter.init();
});

/**
 * 定义splitter一侧的面板。
 * @param $dom jQuery dom元素。
 * @constructor
 */
function SplitPanel($dom) {
    this.$dom = $dom;
    this.rc = null;
    this.$maskDom = null;
    this.minWidth = 0;
    this.minHeight = 0;
    this.maxWidth = 0;
    this.maxHeight = 0;
}

/**
 * 清空面板数据。
 */
SplitPanel.prototype.clear = function () {
    if (null !== this.$dom){
        var selectNone = ["-webkit-user-select", "-moz-user-select", "-ms-user-select", "user-select"];
        var that = this;
        $.each(selectNone, function (index, value) {
            that.$dom.css(value, "text");
        });
    }
    this.$dom = null;
    this.rc = null;
    if (this.$maskDom){
        this.$maskDom.remove();
    }
    this.$maskDom = null;
};

/**
 * 面板分割操作。
 * @constructor
 */
function FinSplitter() {
    this.$splitters = null;

    // this.$curSplitter = null;
    this.running = false;
    this.ptStart = null;
    this.isHorz = false;

    this.pannels = null;
}

{
    FinSplitter.prototype.init = function () {
        this.$splitters = $(".splitter");

        $.each(this.$splitters, function (index, splitter) {
            console.log(splitter);

            $(splitter).css("cursor", $(splitter).width() < $(splitter).height() ? "ew-resize":"ns-resize");
        });

        var that = this;
        this.$splitters.on("mousedown touchstart", function(e){
            that.start(e);
        });

        var $body = $("body");
        $body.on("mousemove touchmove", function(e){
            that.move(e);
        });

        $body.on("mouseup touchend", function(e){that.end();});
    };

    FinSplitter.prototype.start = function (event) {
        this.clear();
        // var that = this;

        // 拖拽起始位置
        this.ptStart = {x: event.clientX, y: event.clientY};

        // 当前拖拽的splitter
        var $splitter = $(event.target);
        // this.$curSplitter = $(this);

        this.isHorz = $splitter.width() < $splitter.height();

        this.pannels = [new SplitPanel($splitter.prev()),
            new SplitPanel($splitter.next())];
        if (null == this.pannels[0].$dom || null == this.pannels[1].$dom){
            return;
        }

        var selectNone = ["-webkit-user-select", "-moz-user-select", "-ms-user-select", "user-select"];
        $.each(this.pannels, function (index, panel) {
            var $dom = panel.$dom;
            panel.rc = {
                l: $dom.position().left,
                t: $dom.position().top,
                w: $dom.width(),
                h: $dom.height()
            };

            var rc = panel.rc;

            var $maskDom = $("<div></div>");
            $maskDom.css("position", "absolute");
            $maskDom.css("background", "#b6c2c9");
            $maskDom.css("opacity", "0.2");

            $maskDom.css("width", rc.w + "px");
            $maskDom.css("height", rc.h + "px");
            // $maskDom.css("left", rc.l + "px");
            // $maskDom.css("top", rc.t + "px");
            $maskDom.css("left", "0px");
            $maskDom.css("top", "0px");
            $maskDom.appendTo($dom);
            panel.$maskDom = $maskDom;

            panel.minWidth = $dom.minWidth();
            panel.minHeight = $dom.minHeight();
            panel.maxWidth = $dom.maxWidth();
            panel.maxHeight = $dom.maxHeight();

            $.each(selectNone, function (index, value) {
                $dom.css(value, "none");
            });

        });

        // 开始拖拽
        console.log("splitting start");
        this.running = true;
    };

    FinSplitter.prototype.move = function (event) {
        if (!this.running){
            return;
        }

        var offset = this.isHorz ? (event.clientX - this.ptStart.x) : (event.clientY - this.ptStart.y);

        var oriW = [this.isHorz ? this.pannels[0].rc.w : this.pannels[0].rc.h,
            this.isHorz ? this.pannels[1].rc.w : this.pannels[1].rc.h,
        ];
        var newWidth = [Math.round(oriW[0] + offset),
            Math.round(oriW[1] - offset)];
        if (this.isHorz){
            if (newWidth[0] < (this.pannels[0].minWidth || 0) ||
                (newWidth[1] < (this.pannels[1].minWidth || 0))){
                return;
            }
        }
        else{
            if (newWidth[0] < (this.pannels[0].minHeight || 0) ||
                (newWidth[1] < (this.pannels[1].minHeight || 0))){
                return;
            }
        }

        var that = this;
        $.each(this.pannels, function (index, value) {
            value.$dom.css(that.isHorz?"width":"height", newWidth[index] + "px");
            value.$maskDom.css(that.isHorz?"width":"height", newWidth[index] + "px");
        });
    };

    FinSplitter.prototype.end = function () {
        this.clear();
    };

    FinSplitter.prototype.clear = function () {
        this.running = false;

        $.each(this.pannels, function (index, panel) {
            panel.clear();
        })

        this.pannels = null;
    }
}
