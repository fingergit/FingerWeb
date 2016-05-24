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
(function(angular) {
  'use strict';
  angular.module('docsTabsExample', [])
    .directive('simpleDirect1', function () {
      return {
        restrict: 'E',
        template: '<a href="http://www.baidu.com">白毒</a>'
      }
    })
    .directive('simpleDirect2', function () {
      return {
        restrict: 'E',
        // value和text是自定义的属性。看html中的使用。
        template: function (elem, attr) {
          return "<a href='" + attr.value + "'>" + attr.text + "</a>";
        }
      }
    })
    .controller('ScopeTestCtrl', function ($scope) {
    })
    .directive('scopeFalseDirect', function () {
      return {
        retrict: 'A',
        scope: false,
        template: '<div>内部: {{myProperty}} <input ng-model="myProperty"/></div>'
      }
    })
    .controller('ScopeTrueTestCtrl', function ($scope) {
    })
    .directive('scopeTrueDirect', function () {
      return {
        retrict: 'A',
        scope: true,
        template: '<div>内部: {{myProperty}} <input ng-model="myProperty"/></div>'
      }
    })
    .controller('ScopeHuaTestCtrl', function ($scope) {
    })
    .directive('scopeHuaDirect', function () {
      return {
        retrict: 'A',
        scope: {},
        template: '<div>内部: {{myProperty}} <input ng-model="myProperty"/></div>'
      }
    })
    .directive('myTabs', function() {
      return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: ['$scope', function($scope) {
          var panes = $scope.panes = [];

          $scope.select = function(pane) {
            angular.forEach(panes, function(pane) {
              pane.selected = false;
            });
            pane.selected = true;
          };

          this.addPane = function(pane) {
            if (panes.length === 0) {
              $scope.select(pane);
            }
            panes.push(pane);
          };
        }],
        templateUrl: 'directivetest/template/my-tabs.html'
      };
    })
    .directive('myPane', function() {
      return {
        require: '^^myTabs',
        restrict: 'E', // 备选项有"A"、"E" 和 "C"， "M" ，分别代表 attribute、element、class和comment（默认值为"A"）
        //replace: 说明是否替换原始标记中的值或是追加原始标记中的值。默认值是false，这时原始标记将被保留。
        // replace: false,
        //  说明自定义指令是否复制原始标记中的内容。例如，之前展示的“tab”指令设置了transclude 为 true，因为tab 元素包含其他HTML 元素。
        transclude: true, // 复制原始HTML内容
        scope: { // 创建指令的作用范围
          title: '@' // @: 值传递 ,单向绑定。指令会检索从父级scope中传递而来字符串中的值。指令可以使用该值但无法修改，是最常用的变量。
                     // =: 符号表示变量是引用传递。指令检索主Scope中的引用取值。值可以是任意类型的，包括复合对象和数组。
                     // 指令可以更改父级Scope中的值，所以当指令需要修改父级Scope中的值时我们就需要使用这种类型。
                     // &: 符号表示变量是在父级Scope中起作用的表达式。它允许指令实现比修改值更高级的操作。
        },
        // link: 该方法在指令中扮演着重要的角色。它负责执行DOM 操作和注册事件监听器等。link 方法包含以下参数：
        //         scope: 指令Scope的引用。scope 变量在初始化时是不被定义的，link 方法会注册监视器监视值变化事件。
        // element: 包含指令的DOM元素的引用， link 方法一般通过jQuery 操作实例（如果没有加载jQuery，还可以使用Angular's jqLite ）。
        //       controller: 在有嵌套指令的情况下使用。这个参数作用在于把子指令的引用提供给父指令，允许指令之间进行交互， tab 指令就是使用该参数较典型的例子：http://jsfiddle.net/powertoolsteam/GBE7N/1/
        link: function(scope, element, attrs, tabsCtrl) {
          tabsCtrl.addPane(scope);
        },
        templateUrl: 'directivetest/template/my-pane.html'
      };
    });
})(window.angular);
