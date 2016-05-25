[TOC]
# AngularJS教程笔记
译自：
https://docs.angularjs.org/tutorial

今天开始系统学习angularjs，要想做好web app，不系统学习一下发现好多问题很难理解。教程来自官方，这里记录一下学习笔记。

完成此教程可以学到的知识：
- 如何搭建可在所有浏览器中运行的完整的Web App。
- 数据模型如何与视图绑定。
- 如何进行单元测试(使用Karma)和终端测试(使用Protractor)。
- 将逻辑处理从模块移到控制器中。
- 使用Server访问数据。
- 如何添加App动画效果(使用ngAnimate)。

最终，你将学会使用AngularJs开发Web App的整个流程，包含测试。

## 开发环境
- 安装git。下载地址:  http://git-scm.com/download
- 安装Node.js。下载地址: http://nodejs.org/download/
- 安装java。下载地址: https://www.java.com/en/download/help/download_options.xml
- 下载教程工程:
  ```
  git clone --depth=14 https://github.com/angular/angular-phonecat.git
  ```
- 进入angular-phonecat文件夹，安装所需模块

  ```
  npm install
  ```

  此命令读取package.json文件，把所需的模块添加到node_modules文件夹中。同时会下载AngularJs框架到app/bower_components文件夹中。
  包括：
  - Bower: 代码包管理器。
  - Http-Server: 轻小的本地静态Web服务器。
  - Karma: 运行单元测试。
  - Protractor: 运行E2E(end to end)测试。

- 安装Protractor需要的驱动。

  ```
  npm run update-webdriver
  ```
### 单元测试步骤
- 执行`npm test`，会自动打开Chrome、FireFox并执行所有单元测试。

测试结果会显示在命令行窗口中。
> 只要不关闭窗口，当项目的所有js文件变化时，会实时重新进行单元测试。

### E2E测试步骤
- 在命令行窗口执行`npm start`启动测试。
- 新开一命令行窗口执行`npm run protractor`启动测试。

测试结果会显示在命令行窗口中。执行完后自动退出Chrome。


### 提示
- 项目定义了一些脚本，可以加速开发，包括：
  - `npm start`: 开启本地web服务器。
  - `npm test`: 开始Karma单元测试。
  - `npm run protractor`: 开始E2E测试。
  - `npm run update-webdriver`: 安装Protractor需要的驱动(只需执行一次)。

- 如果想让上面的工具应用于所有工程，而不局限于此例，可以下载安装它们的可执行文件。

  下载方法为(Windows下不需要sudo):

  ```
  sudo npm install -g bower
  ```

  安装后，如果想运行bower，可以这样：

  ```
  bower install
  ```
- 如果想改变Http-Server的地址和端口，可以修改package.json文件，`-a`指定地址，`-p`指定端口号。
- 执行`npm test`时会读取`test/karma.conf.js`配置文件。要在多个浏览器中测试，可以修改里面的`browsers`属性。缺省为: `['Chrome', 'Firefox']`。
- E2E测试是模拟真人对项目的整体测试，读取`test/e2e`件夹的文件。测试开始后，会读取`test/protractor-conf.js`配置文件。

## 第一节 Bootstrapping
   进入angular-phonecat目录，运行:
   ```
   git checkout -f step-1
   npm install
   ```

   > 在以后的各节里，需要使用相同的命令，只是将step-x的序号改一下。
   > -f： 强行更新工作区。

   打开另一个命令行窗口，

   ```
   npm start
   ```

   然后在浏览器输入: `http://localhost:8000/` 不是官方说的: `http://localhost:8000/app/`。

### AngularJS启动流程
 1. 浏览器在网页完全加载后，调用angular.js中注册的回调函数。
 1. 回调函数中，查找ngApp指令，以ngApp对应的html元素作为App的开始。

 在启动过程中，

 1. 创建依赖注入用的注入器。
 1. 注入器创建rootScope作为App的上下文。
 1. 从带ng-app的元素开始，编译每个指令。
 1. 监测浏览器事件（鼠标、键盘等），如果会对model产生影响，更新相应的视图。

### 提示
 1. 可以从[angular-seed project](https://github.com/angular/angular-seed)下载AngularJS的模板工程。这些工程已经经过了配置、安装了angularjs框架。

## 第二节 Static Template(略过)
## 第三节 Angular Templates
- ngRepeat指令:
  ```
  <html ng-app="phonecatApp">
  <head>
    ...
    <script src="bower_components/angular/angular.js"></script>
    <script src="app.js"></script>
  </head>
  <body ng-controller="PhoneListController">

    <ul>
      <li ng-repeat="phone in phones">
        <span>{{phone.name}}</span>
        <p>{{phone.snippet}}</p>
      </li>
    </ul>

  </body>
  </html>
  ```

  - ngApp指定指定一个app module，module名称为phonecatApp。
  - PhoneListController包含在module中。
  - 数据模型`phones`包含在`PhoneListController`中。
  - 每个Controller都有一个自己的活动范围`$scope`，在Controller中定义数据，要定义到$scope对象中。

  ```
  // Define the `phonecatApp` module
  var phonecatApp = angular.module('phonecatApp', []);

  // Define the `PhoneListController` controller on the `phonecatApp` module
  phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
    $scope.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
  });
  ```
- 单元测试代码
  ```
  describe('PhoneListController', function() {

    // 告诉Angular每次测试前要加载phonecatApp模块。
    beforeEach(module('phonecatApp'));

    // 要在测试函数中注入$controller服务。
    it('should create a `phones` model with 3 phones', inject(function($controller) {
      var scope = {};
      // 使用$controller服务创建`PhoneListController`实例。
      var ctrl = $controller('PhoneListController', {$scope: scope});

      expect(scope.phones.length).toBe(3);
    }));

  });
  ```

  > 通过$controller服务，只能访问.controller('XXX',)定义的controller，不能使用下面提到的component中定义的controller。

## 第四节 Components
- 组件(components): Controller和template的组合，为了便于复用于使用。可以认为是一个非常轻量级的Directive。

  ```
  angular.
    module('myApp').
    component('greetUser', {
      template: 'Hello, {{$ctrl.user}}!',
      controller: function GreetUserController() {
        this.user = 'world';
      }
    });
  ```

  html中:

  ```
  <greet-user></greet-user>
  ```

  通过组件，使html的代码更加简洁明了。

  - controller可以不定义，Angular会提供一个dummy controller。
  - 最佳实践：不要直接使用scope，不把数据定义到scope上，而是定义到controller上（上面的this.user）。
  - 在template中，component默认使用`$ctrl`作为controller的别名。

- 组件测试
  ```
  describe('phoneList', function() {
    beforeEach(module('phonecatApp'));

    // Test the controller
    describe('PhoneListController', function() {
      it('should create a `phones` model with 3 phones', inject(function($componentController) {
        var ctrl = $componentController('phoneList');
        expect(ctrl.phones.length).toBe(3);
      }));
    });
  });
  ```

## 第五节 路径和文件结构
- 可以通过子模块和主模块来实现模块复用。

  子模块定义:
  ```
  angular.module('phoneList', []);
  ```

  主模块定义:
  ```
  angular.module('phonecatApp', [
    // ...which depends on the `phoneList` module
    'phoneList'
  ]);
  ```

- 按功能和机能来划分文件夹，将功能相同的模块、模板、组件放在同一个文件夹中。

## 第六节 Filtering Repeaters
- 只显示列表特定的项，而不是所有项
  ```
  <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query">
  ```

  > 关于filter函数的过滤规则，参见[这里](https://docs.angularjs.org/api/ng/filter/filter)。

  > []Protractor API Docs](https://angular.github.io/protractor/#/api)

## 第七节  双向数据绑定
- 为列表框排序
  ```
  <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp">
  ```
  > 关于[orderBy](https://docs.angularjs.org/api/ng/filter/orderBy)

  > 正向和反向排序:
  ```
  <option value="age">Newest</option>
  <option value="-age">Oldest</option>
  ```

# 第八节 XHR和依赖注入(Dependency Injection)

- get加载数据
  ```
  controller: ['$http', function PhoneListController($http) {
       $http.get('phones/phones.json').then(function(response) {
              self.phones = response.data;
            });
  }
  ```

  上面的url路径是相对于index.html的。返回的json数据会包装成response.data对象。
  通过依赖注入，可以为controller添加服务（像上面的`$http`）。

  > If you inspect a Scope, you may also notice some properties that begin with $$. These properties are considered private, and should not be accessed or modified.

  - minify the JavaScript需要注意。

  - self.phones = response.data.slice(0, 5);只将返回的前5条设置给phones。

  - 显示纯json字符串:
    ```
    <div>
    <pre>{{$ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp | json}}</pre></div>
    ```
  - 左右两列流式布局，左侧占1/6，右侧5/6。
    ```
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-10"></div>
      </div>
    </div>

    ```

# 第九节 Templating Links & Images
- 对于img的src，要使用ngSrc指令：
  ```
  <img ng-src="{{phone.imageUrl}}" alt="{{phone.name}}" />
  ```
  而不能用
  ```
  <img src="{{phone.imageUrl}}" alt="{{phone.name}}" />
  ```
  这样会输出`http://localhost:8000/{{phone.imageUrl}}`，而不是真正的地址。（The issue here is that the browser will fire a request for that invalid image address as soon as it hits the <img> tag, which is before Angular has a chance to evaluate the expression and inject the valid address.）

  > 但经过实际测试，使用src也能找到真正的地址(laj)。

# 第十节 路由和多视图
- 添加路由模块: ngRoute

  bower.json:
  ```
  {
  ...
  "angular-route": "1.5.x",
  ...
  }
  ```

  然后执行:
  ```
  npm install
  ```
  > Warning: If a new version of Angular has been released since you last ran npm install, then you may have a problem with the bower install due to a conflict between the versions of angular.js that need to be installed. If you run into this issue, simply delete your app/bower_components directory and then run npm install.

  > Application routes in Angular are declared via the $routeProvider, which is the provider of the $route service.

