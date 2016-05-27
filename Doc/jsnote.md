# js学习笔记

## 学习工具
- 可以在chrome的F12的Console中书写js代码并测试。
- https://babeljs.io/，可以将ES2015代码转为旧格式。

## 基本语法

- 那些老旧的实例可能会在` <script>` 标签中使用 `type="text/javascript"`。现在已经不必这样做了。JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言。
 `<script src="myScript.js"></script>`
- JavaScript 是脚本语言。浏览器会在读取代码时，逐行地执行脚本代码。而对于传统编程来说，会在执行前对所有代码进行编译。
- `var carname`;变量 carname 的值将是 undefined：
- 如果重新声明 JavaScript 变量，该变量的值不会丢失。在以下两条语句执行后，变量 carname 的值依然是 "Volvo"：

    ```
    var carname="Volvo"; var carname;
    ```
- 在 JavaScript 函数内部声明的变量（使用 var）是局部变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。
   局部变量会在函数运行以后被删除。全局变量会在页面关闭后被删除。

- 如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明。即使它在函数内执行。

- 用`\u####`表示一个Unicode字符：
- 由于多行字符串用\n写起来比较费事，所以最新的ES6标准新增了一种多行字符串的表示方法，用\` ... \`表示。

- throw "not a number";

- JavaScript的设计者希望用null表示一个空的值，而undefined表示值未定义。事实证明，这并没有什么卵用，区分两者的意义不大。大多数情况下，**我们都应该用null**。**undefined仅仅在判断函数参数是否传递的情况下有用**。
- 启用strict：启用strict模式的方法是在JavaScript代码的第一行写上：`'use strict';`这是一个字符串，不支持strict模式的浏览器会把它当做一个字符串语句执行，支持strict模式的浏览器将开启strict模式运行JavaScript。
- ES6: Array、Map和Set都属于iterable类型。具有iterable类型的集合可以通过新的for ... of循环来遍历。
  ```
  var a = [1, 2, 3];
  for (var x of a) {
  }
  ```

  另外(ES5.1)：
  ```
  a.forEach(function (element, index, array) {
      // element: 指向当前元素的值
      // index: 指向当前索引
      // array: 指向Array对象本身
      alert(element);
  });
  ```

- 表单操作:

   ```
   function validate_required(field,alerttxt) {

        with (field) {

            if (value==null||value=="") {
                alert(alerttxt);return false
            } else {
                return true
            }
         }
   }

   <html>
   <head>
   <script type="text/javascript">

   function validate_required(field,alerttxt)
   {
   with (field)
     {
     if (value==null||value=="")
       {alert(alerttxt);return false}
     else {return true}
     }
   }

   function validate_form(thisform)
   {
   with (thisform)
     {
     if (validate_required(email,"Email must be filled out!")==false)
       {email.focus();return false}
     }
   }
   </script>
   </head>

   <body>
   <form action="submitpage.htm" onsubmit="return validate_form(this)" method="post">
   Email: <input type="text" name="email" size="30">
   <input type="submit" value="Submit">
   </form>
   </body>

   </html>
  ```


## 数据类型
### Number
 JavaScript 只有一种数字类型。JavaScript 数字均为 64 位
 JavaScript 不是类型语言。与许多其他编程语言不同，JavaScript 不定义不同类型的数字，比如整数、短、长、浮点等等。
 使用小数点或指数计数法）最多为 15 位。
 小数的最大位数是 17，但是浮点运算并不总是 100% 准确。

 - 2 / 0; // Infinity **如果执行isNaN(2/0)返回false。**
 - 0 / 0; // NaN
 - `isNaN(x)``: 判断x是否是一个数值。

### 字符串
- `str.match("bulbon")``: 判断str中是否包含bulbon字符串。
- escape和unescape： 对字符串进行编码和解码。这样就可以在所有的计算机上读取该字符串。编码时，其中某些字符被替换成了十六进制的转义序列。**unescape已被废，ECMAScript v3 反对使用该方法，应用使用 decodeURI() 和 decodeURIComponent() 替代它。**

  如："Visit W3School!"变为"Visit%20W3School%21"。"?!=()#%&"变为"%3F%21%3D%28%29%23%25%26"。

### 数组
 - 数组赋值：

   ```
   var cars=new Array("Audi","BMW","Volvo");
   var cars=["Audi","BMW","Volvo"];
   ```

 - JavaScript的数组可以包括任意数据类型。
 
   ```
   [1, 2, 3.14, 'Hello', null, true];
   ```

 - `arr.length;`获取数组长度。`arr.length = 2;`：改变数组长度。

 - `arr.indexOf('abc');`查找元素abc在数组中的索引值。

 - `slice()`就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array。
   ```
   var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
   arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
   ```

- 复制一个array： var aCopy = arr.slice();

- push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉。
- 如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉
- arr.sort();排序。
- arr.reverse(); 反转。
- splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
  ```
  var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
  // 从索引2开始删除3个元素,然后再添加两个元素:
  arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
  arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
  // 只删除,不添加:
  arr.splice(2, 2); // ['Google', 'Facebook']
  arr; // ['Microsoft', 'Apple', 'Oracle']
  // 只添加,不删除:
  arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
  arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
  ```
- concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array：
  ```
  var arr = ['A', 'B', 'C'];
  var added = arr.concat([1, 2, 3]);
  ```
- join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：
  ```
  var arr = ['A', 'B', 'C', 1, 2, 3];
  arr.join('-'); // 'A-B-C-1-2-3'
  ```

### 对象

 ```
 var person={firstname:"Bill", lastname:"Gates", id:5566};
 ```

 访问属性是通过.操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用''括起来：

 ```
 var xiaohong = {
     name: '小红',
     'middle-school': 'No.1 Middle School' // 访问这个属性无法使用.操作符，必须用xiaohong['middle-school']来访问。
 };
 ```

 对象属性有两种寻址方式：
 - `name=person.lastname;`
 - `name=person["lastname"];`

 对象遍历:

 ```
 JavaScript for/in 语句循环遍历对象的属性：
 for (x in person){
    txt=txt + person[x];
 }
 ```
 这里x是key值，即对象的属性名。

 - 创建新对象有两种不同的方法：
   - 定义并创建对象的实例
   - 使用函数来定义对象，然后创建新的对象实例
     使用函数来构造对象

     ```
     function person(firstname,lastname,age,eyecolor){
        this.firstname=firstname; this.lastname=lastname; this.age=age; this.eyecolor=eyecolor; }
     }
     var myFather=new person("Bill","Gates",56,"blue");
    ```

 - 删除属性: `delete obj.name;`
 - 判断属性是否存在：`'name' in xiaoming; // true or false`
 - 判断属性是否自身的，而不是继承来的：`xiaoming.hasOwnProperty('name');`

### 容器类Map和Set（ES6）
- map使用

  ```
  var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
  m.get('Michael'); // 95

  m = new Map();
  m.set('Adam', 67);
  m.has('Adam'); // 是否存在key 'Adam': true
  m.get('Adam'); // 67
  m.delete('Adam');
  ```
- Set使用

  Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。
  ```
  var s1 = new Set(); // 空Set
  var s2 = new Set([1, 2, 3, '3']); // 含1, 2, 3
  s.add(4);
  s.add(4); // 可以重复添加，但不会有效果。
  s.delete(3);
  ```

## 函数

   JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments类似Array但它不是一个Array：

   ```
   function foo(x) {
       alert(x); // 10
       for (var i=0; i<arguments.length; i++) {
           alert(arguments[i]); // 10, 20, 30
       }
   }
   foo(10, 20, 30);
   ```

   - ES6

   ```
   unction foo(a, b, ...rest) {
       console.log('a = ' + a);
       console.log('b = ' + b);
       console.log(rest);
   }
   foo(1, 2, 3, 4, 5);
   ```

   // 结果:
   // a = 1
   // b = 2
   // [ 3, 4, 5 ]

   - JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部。**只是把声明提到顶部，赋值不会。**

     ```
     function foo() {
         var x = 'Hello, ' + y;
         alert(x);
         var y = 'Bob';
     }

     foo();
     ```
     但是alert显示Hello, undefined，说明变量y的值为undefined。这正是因为JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值。

   - 全局函数中的this指向的是window对象。（strict模式下让函数的this指向undefined）

   - apply:

     ```
     function getAge() {
         var y = new Date().getFullYear();
         return y - this.birth;
     }

     var xiaoming = {
         name: '小明',
         birth: 1990,
         age: getAge
     };

     xiaoming.age(); // 25
     getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空
     ```

     一个与apply()类似的方法是call()，唯一区别是：

     apply()把参数打包成Array再传入；

     call()把参数按顺序传入。

     比如调用Math.max(3, 5, 4)，分别用apply()和call()实现如下：

     ```
     Math.max.apply(null, [3, 5, 4]); // 5
     Math.max.call(null, 3, 5, 4); // 5
     ```

     - 装饰器
     现在假定我们想统计一下代码一共调用了多少次parseInt()，可以把所有的调用都找出来，然后手动加上count += 1，不过这样做太傻了。最佳方案是用我们自己的函数替换掉默认的parseInt()：

     ```
     var count = 0;
     var oldParseInt = parseInt; // 保存原函数

     window.parseInt = function () {
         count += 1;
         return oldParseInt.apply(null, arguments); // 调用原函数
     };

     // 测试:
     parseInt('10');
     parseInt('20');
     parseInt('30');
     count; // 3
     ```

## 类

   ```
   class Person{
       constructor(name, age){
           this.name = name;
           this.age = age;
       }

       hello(){
           console.log("hello, " + this.name);
       }
   }

   class Student extends Person{
       constructor(name, age, score){
           super(name, age);
           this.score = score;
       }

       grade(){
           console.log('student name: ' + this.name + " score: " + this.score);
       }
   }

   var student = new Student('zs', 20, 100);
   student.grade();

   ```

## 名空间
   全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。

   减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如：

   ```
   // 唯一的全局变量MYAPP:
   var MYAPP = {};

   // 其他变量:
   MYAPP.name = 'myapp';
   MYAPP.version = 1.0;

   // 其他函数:
   MYAPP.foo = function () {
       return 'foo';
   };
   ```
   把自己的代码全部放入唯一的名字空间MYAPP中，会大大减少全局变量冲突的可能。

   许多著名的JavaScript库都是这么干的：jQuery，YUI，underscore等等。

## DOM操作
  始终记住DOM是一个树形结构。操作一个DOM节点实际上就是这么几个操作：

  >严格地讲，我们这里的DOM节点是指Element，但是DOM节点实际上是Node，在HTML中，Node包括Element、Comment、CDATA_SECTION等很多种，以及根节点Document类型，但是，绝大多数时候我们只关心Element，也就是实际控制页面结构的Node，其他类型的Node忽略即可。根节点Document已经自动绑定为全局变量document。

 - 查询: getElementById、getElementsByTagName、getElementsByClassName.
   ```
   var q1 = document.querySelector('#q1');
   // 通过querySelectorAll获取q1节点内的符合条件的所有节点：
   var ps = q1.querySelectorAll('div.highlighted > p');
   ```

    - 遍历：遍历该DOM节点下的子节点，以便进行进一步操作；

      ```
      var cs = test.children;
      var c;
      for (i = 0; i < list.children.length; i++) {
          c = list.children[i]; // 拿到第i个子节点
      }
      var first = test.firstElementChild;
      var last = test.lastElementChild;
      ```

 - 更新：更新该DOM节点的内容，相当于更新了该DOM节点表示的HTML的内容；
    - document.getElementById(id).innerText =new Text

      ```
      p.innerText = '<script>alert("Hi")</script>';
      // HTML被自动编码，无法设置一个<script>节点:
      // <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p>
      ```
      两者的区别在于读取属性时，innerText不返回隐藏元素的文本，而textContent返回所有文本。另外注意IE<9不支持textContent。

    - document.getElementById(id).innerHTML=new HTML(要注意XSS攻击)
    - document.getElementById(id).attribute=new value

    - document.getElementById(id).style.property=new style
      ```
      p.style.fontSize = '20px';
      ```
      写成驼峰式命名，因为font-size并非JavaScript有效的属性名。

 - 添加：在该DOM节点下新增一个子节点，相当于动态增加了一个HTML节点；

   ```
   var para=document.createElement("p");
   var node=document.createTextNode("这是新段落。");
   para.appendChild(node);
   ```

   ```
   var d = document.createElement('style');
   d.setAttribute('type', 'text/css');
   d.innerHTML = 'p { color: red }';
   document.getElementsByTagName('head')[0].appendChild(d);
   ```

   可以使用parentElement.insertBefore(newElement, referenceElement);，子节点会插入到referenceElement之前。

 - 删除：将该节点从HTML中删除，相当于删掉了该DOM节点的内容以及它包含的所有子节点。
   ```
   var removed = parent.removeChild(child);// removed === child
   ```
 - 在不引用父元素的情况下删除某个元素，就太好了。
   不过很遗憾。DOM 需要清楚您需要删除的元素，以及它的父元素。
   这是常用的解决方案：找到您希望删除的子元素，然后使用其 parentNode 属性来找到父元素：

   ```
   var child=document.getElementById("p1");
   child.parentNode.removeChild(child);
   ```

 OK.

 - document.title = "";
 - document.getElementById("myBtn").onclick=function(){di
 - onload 和 onunload 事件会在用户进入或离开页面时被触发。
 - onchange 事件常结合对输入字段的验证来使用。
 - onmouseover 和 onmouseout
 - onmousedown, onmouseup 以及 onclick 构成了鼠标点击事件的
   http://www.w3school.com.cn/tiy/t.asp?f=js_dom_event_onfocus
   http://www.w3school.com.cn/jsref/dom_obj_event.asp

- 文件操作：

  ```
  var
      fileInput = document.getElementById('test-image-file'),
      info = document.getElementById('test-file-info'),
      preview = document.getElementById('test-image-preview');
  // 监听change事件:
  fileInput.addEventListener('change', function () {
      // 清除背景图片:
      preview.style.backgroundImage = '';
      // 检查文件是否选择:
      if (!fileInput.value) {
          info.innerHTML = '没有选择文件';
          return;
      }
      // 获取File引用:
      var file = fileInput.files[0];
      // 获取File信息:
      info.innerHTML = '文件: ' + file.name + '<br>' +
                       '大小: ' + file.size + '<br>' +
                       '修改: ' + file.lastModifiedDate;
      if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
          alert('不是有效的图片文件!');
          return;
      }
      // 读取文件:
      var reader = new FileReader();
      reader.onload = function(e) {
          var
              data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'
          preview.style.backgroundImage = 'url(' + data + ')';
      };
      // 以DataURL的形式读取文件:
      reader.readAsDataURL(file);
  });
  ```
  上面的代码演示了如何通过HTML5的File API读取文件内容。以DataURL的形式读取到的文件是一个字符串，类似于data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...，常用于设置图像。如果需要服务器端处理，把字符串base64,后面的字符发送给服务器并用Base64解码就可以得到原始文件的二进制内容。

## 浏览器对象模型 (BOM)
## Window 对象
 它表示浏览器窗口。

   **所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。document 也是 window 对象的属性之一**

### window.screen
 对象包含有关用户屏幕（和浏览器窗口无关系）的信息。window.screen 对象在编写时可以不使用 window 这个前缀。

 - screen.availWidth - 可用的屏幕宽度（不包括任务栏，如任务栏在左侧时）
 - screen.availHeight - 可用的屏幕高度（不包括任务栏）
 - 
### window.location 对象
 用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。**在编写时可不使用 window 这个前缀。**

### window.history 对象
 **在编写时可不使用 window 这个前缀。**

## 定时器

   执行一次:

   ```
   var timer = setTimeout("alert('5 秒！')",5000);
   ```

   循环:

   ```
   var c=0;
   var t;
   function timedCount()
   {
       document.getElementById('txt').value=c
       c=c+1
       t=setTimeout("timedCount()",1000)
   }
   ```

   停止计时:

   ```
   clearTimeout(t);
   ```

## Cookie
   当一个用户成功登录后，服务器发送一个Cookie给浏览器，例如user=ABC123XYZ(加密的字符串)...，此后，浏览器访问该网站时，会在请求头附上这个Cookie，服务器根据Cookie即可区分出用户。

 - 服务器在设置Cookie时可以使用httpOnly，设定了httpOnly的Cookie将不能被JavaScript读取。这个行为由浏览器实现，主流浏览器均支持httpOnly选项，IE从IE6 SP1开始支持。

 - 保存cookie:

   ```
   document.cookie="name=" +escape("zhangsan") + ";pass=" + escape("123456");
   ```

   ```
   document.cookie; // 'v=123; remember=true; prefer=zh'
   ```

