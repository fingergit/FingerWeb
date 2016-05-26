# js基础知识
1. 原型

   某个东西是以另一个东西为原型创作的。这两个东西可以是同一个类型，也可以是不同类型。习语“依葫芦画瓢”，这里的葫芦就是原型，而瓢就是类型，用JavaScript的prototype来表示就是“瓢.prototype =某个葫芦”或者“瓢.prototype= new 葫芦()”。

 - 每个具体的JavaScript类型有且仅有一个原型（prototype），在默认的情况下，这个原型是一个Object对象（注意不是Object类型！）。
 - JavaScript为每一个类型(Type)都提供了一个prototype属性，将这个属性指向一个对象，这个对象就成为了这个类型的“原型”，这意味着由这个类型所创建的所有对象都具有这个原型的特性。
 - JavaScript的对象是动态的，原型也不例外，给prototype增加或者减少属性，将改变这个类型的原型，这种改变将直接作用到由这个原型创建的所有对象上，例如：

   ```
   <script>
       function Point(x,y)
       {
           this.x = x;
           this.y = y;
       }
       var p1 = new Point(1,2);
       var p2 = new Point(3,4);
       Point.prototype.z = 0; //动态为Point的原型添加了属性
       alert(p1.z);
       alert(p2.z); //同时作用于Point类型创建的所有对象
   </script>
   ```
 - 类型原型有名为a的属性，对象本身又有一个名为a的属性，则在访问这个对象的属性a时，对象本身的属性“覆盖”了原型属性，但是原型属性并没有消失，当你用delete运算符将对象本身的属性a删除时，对象的原型属性就恢复了可见性。利用这个特性，可以为对象的属性设定默认值，例如：

   ```
   <script>
       function Point(x, y)
       {
           if(x) this.x = x;
           if(y) this.y = y;
       }
       Point.prototype.x = 0;
       Point.prototype.y = 0;

       var p1 = new Point;
       var p2 = new Point(1,2);

       console.log("p2.x=" + p2.x);
       delete p2.x;
       console.log("p2.x=" + p2.x);

   </script>
   ```

 - rototype的行为类似于C++中的静态域，将一个属性添加为prototype的属性，这个属性将被该类型创建的所有实例所共享，但是这种共享是只读的。在任何一个实例中只能够用自己的同名属性覆盖这个属性，而不能够改变它。换句话说，对象在读取某个属性时，总是先检查自身域的属性表，如果有这个属性，则会返回这个属性，否则就去读取prototype域，返回protoype域上的属性。另外，JavaScript允许protoype域引用任何类型的对象，因此，如果对protoype域的读取依然没有找到这个属性，则JavaScript将递归地查找prototype域所指向对象的prototype域，直到这个对象的prototype域为它本身或者出现循环为止。

1. 遍历对象中的元素

   ```
   function classA()
   {
       this.a = 100;
       this.b = 200;
       this.c = 300;

       this.reset = function()
       {
           // 遍历
           for(var each in this)
           {
               delete this[each];
           }
       }
   }
   ```

1. 定义类的方法：

   ```
   function Car(color,door){
      this.color = color;
      this.doors = door;
      this.arr = new Array("aa","bb");
   }
   Car.prototype.showColor(){
      alert(this.color);
   }

   var car1 = new Car("red",4);
   var car2 = new Car("blue",4);
   car1.arr.push("cc");
   alert(car1.arr);  //output:aa,bb,cc
   alert(car2.arr);  //output:aa,bb
   ```