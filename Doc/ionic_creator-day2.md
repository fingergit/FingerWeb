[TOC]
# ionic creator研究第二天之拖拽实现

- **目的** 研究学习ionic creator的拖拽实现。

在creater中，以下地方用到了拖拽：拖动组件到编辑区来创建组件，在编辑区拖拽组件移动位置、改变组件的大小等。下面研究一下拖拽功能是如何实现的。

拖拽涉及以下几个步骤：
- 鼠标按下： 判断按下位置是否有移动源。
- 鼠标移动：按下鼠标并移动一定的距离后，确定拖拽开始，小于此距离，不产生拖动。拖动开始时，改变鼠标指针图标，定义拖拽数据类型，如赋上源图像等。
- 进入接收区：一个视图区域，如果此区域可以接收拖拽数据，就会定义拖拽数据的类型，只有此类型的数据可以接收。鼠标到达接收区域后，可以根据鼠标位置，显示鼠标放开时目标数据的预览效果。
- 鼠标放开：根据新数据创建或修改目标数据。

## 组件创建时的拖拽
从组件区拖拽到编辑区。

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