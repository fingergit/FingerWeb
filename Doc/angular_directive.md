[TOC]
# AngularJS自定义指令

## 代码
参考http://www.2cto.com/kf/201505/400202.html
   ```
   // 自定义Element的Directive
   app.directive("studentInfo", function () {
       return {
           // A 代表 Attribute
           // C 代表 Class
           // E 代表 Element
           // ACE 表示同时创建 A、C、E 三种
           restrict: 'ACE',
           // templateUrl 指向独立的Html文件，AngularJS会用Html文件中的内容替换studentInfo对象
           templateUrl: 'template.html'
       };
   });
   ```

   template.html：
   ```
   <div>
       <p>This is a custom template.</p>
       <p>Your name: {{info.yourname}}</p>
   </div>
   ```

   index.html:
   ```
   <body ng-app="ngCustomDirectiveTest">
       <div ng-controller="myController as myCtrl">
           <student-info></student-info>
           <br />
           <data-student-info></data-student-info>
           <br />

           <div student-info></div>
           <br />
           <div data_student-info></div>
           <br />

           <div class="student-info"></div>
           <br />
           <div class="data-student-info"></div>
           <br />
       </div>
   </body>
   ```

   注意：你可能还见过restrict:'M'，或者Directive的命名以pre_suf、pre:suf这样的代码书写方式，这些都已经“过时”了，最潮的restrict仅使用ACE三种，命名方式使用pre-suf。

1. 组件定义
   先来看一个组件在html中的定义：
   ```
   <li ng-repeat="component in components" data-component-type="heading"
       draggable="true" class="">
       <a ng-click="controlClicked(component)">
       <div class="component-content">
           <!-- ngIf: component.data.iconUrl --><span
               ng-if="component.data.iconUrl"
               class="icon heading"
               ng-class="component.type"></span>
           <!-- end ngIf: component.data.iconUrl -->
           <span>Heading</span>
       </div>
       </a>
   </li>
   ```

   从上以代码可以得到以下信息：
   - 在js中，组件位于名为components的数组中。
   - 每个组件都有一个类型标识`data-component-type`，上面的代码中，表示组件为标题(heading)组件。
   - 组件是否可以拖拽，通过`draggable`属性来定义。
   - 当鼠标按下时，会调用函数`controlClicked(component)`。实际上，上函数并未实现。

   真正的拖拽操作是由ionic的drag服务来完成的。

1. 鼠标移到组件上时图像缩放效果的实现

   参见example中的zoom.html例子。

1.