[TOC]
# AngularJS自定义指令
摘自：
http://www.oschina.net/translate/custom-directives-in-angularjs
http://www.cnblogs.com/rohelm/p/4051437.html

> Angularjs Directives是DOM元素(例如属性，元素名，注释或CSS类)上的标记，它告诉AngularJS的 html 编译器($compile) 把特定的操作连接到DOM元素或转化为DOM元素及其子元素。例如， ng-app 属性是一个指令，因此 ng-controller 及所有的以ng-, ng:, ng_, x-ng-bind, data-ng-bind开头的属性都是。
>
> **把它简单的理解成在特定DOM元素上运行的函数，指令可以扩展这个元素的功能。**

因此，AngularJS的自定义指令，就是你自己的指令，加上编译器编译DOM时运行的原生核心函数。这可能很难理解。现在，假设我们想在应用中不同页面复用一些特定的代码，而又不复制代码。那么，我们就可以简单地把这段代码放到单独的文件，并调用使用自定义指令的代码，而不是一遍又一遍地敲下来。这样的代码更容易理解。

AngularJS中有四种类型的自定义指令：
- E: 元素指令
- A: 属性指令(默认)
- C: CSS class 指令
- M: 注释指令(不建议使用)

## 定义
```
angular.module('myApp', [])
.directive('myDirective', function() {
    return {
        restrict: String,
        priority: Number,
        terminal: Boolean,
        template: String or Template Function:
    function(tElement, tAttrs) {...},
    templateUrl: String,
    replace: Boolean or String,
    scope: Boolean or Object,
    transclude: Boolean,
    controller: String or
    function(scope, element, attrs, transclude, otherInjectables) { ... },
    controllerAs: String,
    require: String,
    link: function(scope, iElement, iAttrs) { ... },
    compile: // 返回一个对象或连接函数，如下所示：
    function(tElement, tAttrs, transclude) {
        return {
            pre: function(scope, iElement, iAttrs, controller) { ... },
            post: function(scope, iElement, iAttrs, controller) { ... }
           }
        return function postLink(...) { ... }
        }
    };
 });
```

- replace: 是一个可选参数，如果设置了这个参数，值必须为true，因为默认值为false。默认值意味着模板会被当作子元素插入到调用此指令的元素内部,
           例如上面的示例默认值情况下，生成的html代码如下：
   ```
   <my-directive value="http://www.baidu.com" text="百度"><a href="http://www.baidu.com">百度</a></my-directive>
   ```
   如果设置replace=true
   ```
   <a href="http://www.baidu.com" value="http://www.baidu.com" text="百度">百度</a>
   ```
   据我观察，这种效果只有设置restrict="E"的情况下，才会表现出实际效果。

- scope:
  - false: 继承但不隔离（外部值和内部值是一体的，一起变化）
  - true: 继承并隔离(内部未改变时，内部随随外部值的变化而变化，一旦改变了内部值，内部值与外部值就没关系了。
  - {}: 不继承且隔离（内部值与外部值无任何关系）
  ```
  <div ng-controller="ScopeTestCtrl" ng-init="myProperty='Hello world'">
    外部: {{myProperty}}
    <input ng-model="myProperty" />
    <div scope-hua-direct></div>
  </div>

  .directive('ScopeTestCtrl', function () {
    return {
      retrict: 'A',
      scope: false, // true, {}
      template: '<div>内部: {{myProperty}} <input ng-model="myProperty"/></div>'
    }
  })


  ```

## 注意事项
- 对于templateUrl，默认情况下，调用指令时会在后台通过Ajax来请求HTML模板文件。加载大量的模板将严重拖慢一个客户端应用的速度。为了避免延迟，可以在部署应用之前对HTML模板进行缓存。
