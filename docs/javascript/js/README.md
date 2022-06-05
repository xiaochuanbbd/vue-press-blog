 ## JS基础部分

### 转数字：

NaN的情况：

* undefined,
* {}/{name:""},
* '123字符串'

0的情况：

* false
* null

true转为1

### 转布尔值

几种专为false的情况：

* 0
* -0
* undefined
* null
* NaN
* ''

## 基础运算符

### 一元运算符

#### 数学 % 取余 

a % b 的结果是a整除b 的余数 
** 求幂
求几次方

### +号

用于字符串拼接：
**只要有任意一个字符元另外一个也会转换为字符串**
按照顺序工作
console.log('1'+2+1);//121 ‘1’+2 = ‘12’+1  = ‘121 先执行字符串拼接，再执行数组加运算符
console.log(2+2+'1');//41 先执行加运算符，再执行拼接字符串

### 二元运算符（两个运算元参与运算）

* 唯一支持字符串运算，其他都只支持数字
* 将运算元转换为数字

### 一元运算符 +（一个运算元参与运算）

* 对数字没用 +（-2） = -2
* 对其他数字。会将其转换为数字
* 效果等同于Number（）

### 运算符优先级

* 一元运算符优先级最高
* 赋值运算优先级最低
* 逗号运算符更低

## 值的比较

* 大于>
* 小于<
* 等于 == 
* 不等于 ！=

### 比较运算符

1. 不同类型的值进行比较，先转换为数字在比较大小
2. 字符串类型比较会根据“词典”顺序逐字符的比较大小
   普通相等无法区分0 和false 

* 严格相等 ===  
* 严格不想等 ！==
  需要区分 0和 false的时候使用
  不会做类型的转换

### undefined和null的比较

undefined===null //false
undefeated == null //true 因为都转为 0

### null 和 0 的比较

null ==0 //false
null>0 //false
null >=0 //true 

### undefined 和 0 的比较

undefined ==0 //false
undefined >0 //false
undefined >=0 //false
**在全等情况下undefined和null只会和各自相等，不会和任何数相等**

### 空值合并运算符??

  1. 所第一个参数不是null或者不是undefined 则？？返回第一个参数，否则返回第二个参数
  2. 提供了一种从列表中选择第一个 “已定义”的值的简便方式
     被用于为变量分配默认值
      3.？？优先级非常低， 仅高于 = 和 ？ 在使用的时候，要加括号
      4.没有明确加括号， 不能和 ｜｜ 或者 && 一起使用

 ## 循环

 * wihle
 * for 

 ### 跳出循环

 * break  跳出循环 
 * continue 跳出本次循环
 * outher: for(...)标签标注法，指定标签。可以跳出这个循环

###  switch语句

* case 语句执行**严格相等**
* 没有breach 后面的语句都会执行
* 任何表达式都可以成为switch/case的参数
* 可以对case进行分组 
  case 3:
  case 6:
  ...;
  breack;
  switch (x){
    case 'value1': //if (x==='value1') 严格相等
    console.log(1);
    break;
    case 'value2':
        console.log(2);
        break;
        default:
            console.log('nodefined');
            break
  }

## 函数

1.  函数可以从内访问外部的变量，外部无法看到内部的局部变量
2.  函数可以没有返回值，没有的时候返回的是undefined

函数参数：

* 参数 parameter（范围）：是函数声明是括号内列出的变量（ 形参）
* 参数 argument  是函数在调用时传递给函数的值（实参）

默认值：

1. 使用 = 为函数声明中的参数指定所谓的默认值
   foo(from,text='xxx'){}
2. 参数默认值可以用更复杂的表达式/函数，并且只会在缺少参数才会被计算和分配 

返回值：

* 空值的return 或 没有return的函数返回值都为undefined
* return 代码跨多行 可以加上括号

### 定义函数的方式

1. 函数声明 
   function sayHi(){}
   结尾没有分号
2. 函数表达式 
   let hi = function () {}
   结尾有分号因为是在执行赋值语句

#### 函数是一个值，不加（）是输出函数体的字符串，加括号是调用

### 回调函数 

### 匿名函数

### 函数声明 vs 函数表达式

1. 语法 赋值语句和单独的语句
2. 创建时机
   函数表达式： 在执行赋值语句的时候创建
   函数声明：在被定义之前，就可以被调用。函数声明在其被**声明的代码块内的任何位置** 都是可见的。
3. 作用域
   函数声明：仅作用于本作用域
   函数表达式：赋值操作全局都可见

## 箭头函数

书写方式：

* 不带花括号，可以直接书写函数计算表达式，并返回其结果，不需要return
* 带花括号 ，必须显示的return来返回一些内容

## 八种数据类型

* number
* string
* bigint -- 任意长度的整数
* boolean
* undefined
* null 
* object
* symbol

## 调试工具

## 使用ESLint

1. 安装node。js
2. npm install -g eslint
3. 根目录下创建一个 .eslintrc的配置文件
4. 在集成了 ESLint 的编辑器中安装/启用插件。大多数编辑器都有这个选项

## polyfills和转译器

* polyfills 垫片
  * core js 
  * polyfill.io
* Transpilers 转译器
  * babel

## 对象

### 创建方式

 * 构造函数语法 let user = new Object() 
 * 字面量语法 let user = {}

### 计算属性

 * 在对象字面量中使用方括号，这叫计算属性
 * 从属性名中读取应该是从方括号中的变量中获取
 * 允许任何属性名和变量

### 属性名称限制

 * 没有任何限制，可以使用关键字和保留字
 * 当数字0 被用作对象属性的键时，会被转换为字符串 “0”

### 访问

* 点符号
* 方括号，允许读取变量

### delete 删除属性


 ### 检查属性是否存在 in 操作符

 ### for...in 循环

 遍历一个对象的所有键
 **对于一个整数会有排序** 

### 对象的引用和复制

* 对象储存的是改对象的“在内存中的地址”--换句话说就是该对象的引用
* 当一个对象变量被复制 --引用被复制，而该对象自身并没有被复制

### 对象的比较

* 当引用同一个地址值，相等
* 当两个对象都为空时，不相等

### 克隆与合并

#### 浅拷贝 Object.assgin（）用法

* 第一个参数指目标对象
* 后面的参数是原对象,可以使用数组，会对数组的内容进行拼接
* 如果被拷贝的属性的属性名已经存在，那么它会被覆盖
* 代替for in 进行简单克隆

### 深层克隆

object.assgin / ...扩展运算符 对于基本数据类型可以使用，但对于对象里面的引用类型无法使用。

**使用const声明的对象也是可以被修改的**

## 垃圾回收

### 可达性 

1. 可达值的基本集合，不能被释放的值（不会被垃圾回收的）：

* 当前执行的函数。它的局部变量和参数
* 当前函数嵌套调用链上的其他函数， 它们的局部变量和参数 （闭包）
* 全局变量
* 内部的变量 （根） window？

2. 一个值通过引用或者引用链从根访问任何其他值，则认为该值是可达的
   例如：全局变量中有一个对象，并且该对象的属性引用了另一个对象，则该对象是可达的
3. 几个对象相互引用。但外部没有对其任意对象引用，这些对象也是不可达的（一座孤岛）

### 内部算法 

定期执行垃圾回收步骤

1. 垃圾收集器找到所有的根，并记住他们
2. 遍历并标记来自他们的所有引用
3. 遍历标记的的对象，并标记他们的引用，所有遍历到的对象都会被记住， 以免将来再次遍历到从一个对象
4. 重复操作，直到所有可达的引用都被访问到
5. 没有被标记的对象会被删除

### 优化建议

* 分代收集：对象被分为新的和旧的，旧的检查频率会减少
* 增量收集：将垃圾收集工作分成几部分来做 
* 闲时收集  cpu空闲的时候来运行

### 总结垃圾回收

* 垃圾回收是自动完成的，无法强制执行或者阻止执行
* 当对象是可达状态，他一定存在内存中
* 当引用的根引用不可达，一组相互连接的对象整体都不可达

## this

### 方法中的this

* this的值就是在点之前的这个对象， 即调用该方法的对象
* this是在代码运行时计算的，取决于代码上下文
* 在没有对象的情况下 this是全局对象window

### 箭头函数没有自己的this

* this取决于外部“正常”的函数

## 构造器和操作符“new”

### 构造函数

* 命名以大写字母开头（约定俗成）
* 只能有new操作符来执行

### new操作符执行时的步骤

1. 一个新的空对象被创建并分配给this
2. 函数体执行时，会修改this， 为其添加新的属性
3. 返回this的值

### 函数构造器的目的是--实现可重用的对象创建代码

**new function （立即调用的构造函数）不能被再次调用，因为他不保存在任何地方，只是被创建和调用**

### 在某些库的源码可能会加上这么一句

if (!new.target) { // 如果你没有通过 new 运行我
    return new User(name); // ……我会给你添加 new
  }
这表示无论是否使用new 程序都能正常工作

### 构造器的return

通常构造器是没有return语句，他的任务是将所有必要的东西写入this

* 如果return返回的是一个对象， 则返回这个对象，而不是this
* 如果return返回的是一个原始类型，则忽略
  ps: return只返回带有的对象，其他都返回this

### 可选链" ？."-----对象出现不存在属性的问题 

 检查左边部分是否为undefined，如果是直接返回undefined
语法： let user = null
user?.address?.street //undefined
注意：

* 不要过度使用可选链
* ？.前的变量必须已经声明
* 会产生短路效应
* 其他变体： ?.() 调用函数 ?.[]方括号访问属性

总结：

* obj?.prop
* obj?.[prop]
* obj?.method()


## symbol类型

规范： 属性健只能是字符串类型或者Symbol类型

* 所有的symbol都是不同的
* Symbol不会被自动转换为字符串
* symbol作为键，不会被意外访问到， 是属于隐藏属性，可以和同类的字符串一起使用，但两者完全不相同
* 在对象字面量中使用Symbol，需要使用方括号括起来

```javascipt
let id = Symbol('id')
 let obj  = {
   name:'2',
   [id]:123
 }
```

* Symbol在for...in中会被跳过,Object.keys()也会被跳过
* Object.assgin 会复制Symbol
* Symbol.for(key)会创建一个全局的Symbol，全局Symbol注册相等的Symbol；
* Symbol.keyFor(key)返回Symbol（）填入的描述(只适用于Symbol.for()创建的全局Symbol)

使用场景：

* 隐藏属性对象
* js使用了许多Symbol
  从技术上说，Symbol 不是 100% 隐藏的。有一个内建方法 Object.getOwnPropertySymbols(obj) 允许我们获取所有的 Symbol。还有一个名为 Reflect.ownKeys(obj) 的方法可以返回一个对象的 所有 键，包括 Symbol。所以它们并不是真正的隐藏。但是大多数库、内建方法和语法结构都没有使用这些方法。


## 对象原始值转换

转换规则：

1. 所有的对象转布尔值都为true
2. 数值转换在Data对象中可以相减
3. 字符串转换通常发生在alert（obj）这样一个输出对象

类型转换三种变体

* 对象转string  是指对一个期待字符串的对象执行操作时，例如alert 转为：[object Object] ===>先调用obj.toString或者obj.valueOf()
* 对象转number 是指进行数学运算时 ===>先调用obj.valueOf()再调用obj.toString()
* default 在少数情况下发生，当运算符不确定期望值的类型 例如： 二元加法，二元加法可以用于数字的相加也可以用于字符串拼接 ===>先调用obj.valueOf()再调用obj.toString()

转换方法：

1. 调用obj[Symbol.toPrimitive] 系统Symbol的方法
2. 字符串转换转 toString()优先 再valueOf()
3. 数学运算number/default 优先valueOf再toString()

obj.toString()返回一个字符串 "[object Object]"
obj.valueof()返回对象自身 

## obj[Symbol.toPrimitive]

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

## 数据转换合集

1. 其他类型转布尔值
   六种为false： 0 -0 null undefined NaN ""
2. 比较运算符 
   转数字
3. 数学运算
   转数字
4. 二元+ 
   有字符串 是拼接字符串 
5. 其他类型转数字
   null :0
   false:0
   "":0
   Undefined :NaN
   {}:NaN
   'zifuchuan‘:NaN
6. 其他类型转字符串
   对象/数组转字符串 [object Object]

其他直接是加引号

7. 对象进行转其他类型
   转字符串 ：toString()
   转数字： valueOf 

## 原始数据类型的方法

js允许访问字符串，数字，布尔值，和symbol的方法和属性，为了他们能够起作用，创建了提供额外功能的特殊“对象包装器”使用后被销毁
例子：str.toUpperCase() 包装对象的操作过程：

1. 在访问属性的时候，会创建一个**包含字符串字面值的特殊对象**， 并且具有有用的方法
2. 该方法运行并返回一个新的字符串
3. 特殊对象被销毁，只留下原始值str

注： undefined和null没有任何方法

## 数字类型

1. js中的常规数字以64位格式的IEEE_754存储。也被称为双精度浮点数
2. bigint 用于表示任意长度的整数，常规数字不能安全的超过 2 53 或小于 -2 53

数字编写方法：

1. 常规编写
2. 用下划线_作为分隔符
3. 附加字母e，来指定0的个数来缩短数字 
   let c = 7.3e9 //73000000000（这里的e是把数字乘以1后面跟着给定数量的0的数字）
   let d = 1e-6 //0.000001 (e后面的负数表示除以1后面跟着给定数量的0的数字)

八进制，十六进制，二进制

**数字的toString（）方法，需要使用..来调用  console.log(12323..toString(36)); //9ib**

### 数字舍入

* Math.floor 向下舍入
* Math.ceil 向上取整
* Math.round 向最近的整数舍入 3.1==>3  3.5==>3 3.6==>6
* Math.trunc (ie不兼容) 直接去掉小数点 不舍入

#### 将数字舍入到小数点后n位

1. 乘除法（放大倍数法） 数字 *100（一个比较大的倍数），调用舍入函数，然后在将其除倍数 
   Math.round(num * 100 ) /100//小数点后两位
   该方法可以减少误差，但不能完全消除误差
2. toFixed(n) 将数字舍入到小数点后n位，并**返回字符串** 类似于Math.round 向上或者向下舍入到最近的值
   let num = 12.34;
   alert( num.toFixed(1) ); // "12.3"

#### 数字的方法

isNaN()将其参数转换为数字，然后测试他是否为NaN

#### 为什么0.1+0.2 ！=0.3？

一个数字是以二进制的形式存储在内存中，一个1和0的序列。

0.1和0.2在二进制中是无限循环的小数点

IEEE-745组织将通过数字舍入到最接近的可能数字来解决这个问题，精度会丢失

#### isNaN和isFinite 

* isNaN（）将传入参数转为数字，然后测试它是否为NaN
  NaN ===NaN //false
* isFinite(value）判断是否为数字 。将其参数转为数字，如果是常规数字，则返回true, NaN/Infinity/-Infinity返回false

#### Object.is

类似于 === 比较
let a = {}
let b= {}
console.log(Object.is(NaN,NaN)) //true
console.log(Object.is(0,-0))//false
console.log(Object.is(a,b))//false
console.log(Object.is(NaN===NaN))//false

#### parseInt和parseFloat

适用于提取 “100px" "10$"这样的数据

* parseInt返回一个整数
* parseFloat返回一个浮点数
  他们可以从字符串读取数字，直到无法读取位置， 如果发生error，则返回收集到的数字
  返回NaN的情况
* 第一个字符就是非数字
  parseInt（str,radix）参数
  第二个参数可以选择解析的十六进制和二进制的字符串

区别+号和Number：
这两个无法对非数字的其他数字进行判断。他们的数字转换是严格的比如 “100px”,会返回NaN

#### 其他数学函数

* Math.random()返回从0-1的随机数 
* Math.max() 返回最大值 
* Math.min() 返回最小值
* Math.pow(n,power) 返回n给定的power次幂

#### 传入最大值最小值获得随机数

 随机生成min-max的随机数取整数

  1. 生成 0.5-3.5的值，用round 四舍五入 从而将所需的概率添加到取值范围的边界

 ```javascript
function random(min, max) {
    let rand = min - 0.5 +Math.random()* (max-min+1)
    return Math.round(rand)
}
 ```

2.用math.floor向下取整来取范围从min-max+1的随机数

```javascript
  function random2(min,max){
    let rand = min + Math.random() * (max +1 -min)
    return Math.floor(rand)
} 
```

## 字符串

字符串内部的格式始终是UTF-16 它不依赖于页面编码
字符串长度 str.length

### 访问字符

1. [pos] 
2. str.charAt(pos) 
   两者区别：

* 找不到: []返回undefined， charAt(pos)返回“”空串

### 遍历字符串： for...of

### 字符串是不可变得 无法通过str[0] = xxx来改变

### 转换大小写

* toUpperCase 转换大写
* toLowerCase 转换小写

### 查找子字符串

* str.indexOf(substr,pos)
  功能：查找字符串的位置
  参数： pos给定的位置，  substr的内容
  返回值：找到返回所在的位置，没找到返回-1
  大小写敏感
* str.lastIndexOf()类似indexOf,从字符串的末尾开始搜索到开头
  注意：
  **if(str.indexOf())如果一开始就匹配到会产生 0 这个数字,永远也进不来if循环。有时候我们会见到if(~str.indexOf())这样的代码，意思是if found** 
* includes（str,pos） 
  功能： 匹配字符串，但不需要他的位置 
  返回值：true，false
  参数： pos查询的起始位置
* str.startWith() 以什么开头 返回值 true /false
* str.endWith ()以什么结束 返回值 true /false

### 获取子字符串

* slice(start,end) （重点记住）
  功能：返回字符串从start到end的部分（不包括end） 没有end,返回到结尾
  参数：start，end.可以为负值，表示起止位置从字符串结尾计算
  返回值：获取到的字符串
  不允许start大于end
* substring(start,end)
  与slice基本相同
  但它允许start大于end
  不能写负数，负数被视为0
* substr(start,length)
  功能：返回字符串从start到给定的length部分
  允许start是负数

### 比较字符串

1. 小写字母总是大于大写字母
2. 带变音符号的字母存在“乱序”的情况
   str.codePoinAt(pos) 返回在pos位置的字符串码
   str.formCodePoint(code) 通过数字code创建字符

### 其他字符串方法

str.trim() 去掉字符串前后空格
str.repeat(n)重复字符串n次

### 对比记忆：

* 根据下标找字符串 ：[] charAt(下标) 都是根据下标查找返回字符串， charAt找不到会返回“”
* 判断字符串是否存在 ：indexOf(字符串)返回下标 inclueds ()找字符串，返回布尔值
* 字符串截取：slice/substring ，从开始到下标位置结束； subStr 从开始到多长结束 长度

## 数组

### 声明方式

let arr = new Array()
let arr = []

### 数组方法

* unshift / shift 数组开始添加、删除一个元素，改变原数组
* push /  pop 数组末尾添加删除一个元素，改变原数组

#### 为什么push/pop比unshift/shift运行的要快

shift的操作：

1. 移出索引为 0的元素
2. 将所有的元素向左移动， 索引1改为0，索引2改为1...
3. 更新length属性
   数组中的元素越多，移动他们就要花费越多的时间，意味着更多的内存消耗
   pop操作：
4. 移出最后一位
5. 其他保持不变

 ### 栈和队列：

 栈：后进先出
 队列：先进先出
 js允许从首端/末尾来删除/添加数据，这样的操作叫做 双端队列

### 循环

* for  运行最快哦 兼容低版本浏览器
* for of  item为数组每一项
* forEach ((item,index,array))
* for in  不要用这个。。。

```javascript
let arr = ['apple','bule','orange']
for (const i of arr) {
    console.log(i);
}
```

清空数组： arr.length = 0

### toString

返回以逗号隔开的元素列表
数组没有Symbol.toPrimitive 方法，也没有valueOf,所以执行tostring
 []+1 =='1'
 [1]+1 =="11"
 [1,2]+1 =="1,21"

 ### 使用==比较数组

 除非引用相同，否则永远不相等

### splice 

* 功能：添加，删除和插入元素
* 参数：arr.（start,deleteCount,element1,element2)

1. start:从索引start开始删除arr,
2. deleteCount 删除几个元素 
3. ele1,ele2 当前位置插入

* 会修改后的数组
* 可以允许负向索引

### slice

* 功能：对数组进行街区
* 参数：start，end
* 返回值 返回一个新的数组，从start，到end数组项复制到一个新数组
* 可以允许负数,表示从胃部开始计算
* 不带参数调用：会创建一个副本，不影响原始数组进一步转换

### concat

* 功能：创建一个新数组 ，数组拼接
* 参数：任意数量，数组或者值都可以
* 返回值：返回一个新数组
  注：拼接对象，会变成[object object]
  如果类似数组的对象具有 Symbol.isConcatSpreadable 属性，那么它就会被 concat 当作一个数组来处理

### 数组搜索 

类似字符串搜索

* indexOf 查找数组所在的下标 不存在 -1 不可以处理NaN
* lastIndexOf 从最后寻找item所在的下标 不存在 -1 不可以处理NaN
* includes  查找item是否存在， 返回true/false 可以处理NaN
  ps:这些方法严格比较

### 对象数组的查找：

#### 单个查找：

* find ((item,index,array)=>{...})
  返回值：找到的第一个item对象，没有找到返回undefined
* findIndex((item,index,array)=>{...})
  返回值：找到的item对象所在下标,没找到返回 -1

#### 多个查找

* filter
  arr.filter((item,index,arr)=>{..})
  功能：过滤数组
  返回值： 找到第一个函数返回true的元素，返回所有匹配元素的数组，没找到返回空数组

### map

对每个数组都调用函数，并返回结果数组
返回值：返回经过函数处理的数组
不会改变原数组

### sort 

功能：对数组进行原位排序，更改元素顺序
返回值：返回排序后的数组
会改变原数组
实现排序
升序：arr.sort((a,b)=>a-b）
降序：arr.sort((a,b)=>b-a)

### reverce 

功能：数组翻转
返回值：返回颠倒后的数组，
会改变原数组


### split 和join 

* split
  功能：将字符串分割为数组
  参数：split(分隔符，数组长度的限制) 以什么为分割，参数2很少使用
  返回值： 分割之后的数组

* join
  功能：数组分割成字符串
  参数： join(',")以什么分割， 
  返回值： 返回拼接好的字符串

### reduce / reduceRight

#### reduce

```javascript
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
```

功能：该函数一个接一个应用于所有数组元素， 并将其结果搬到下一个调用
参数： 

* accumulator 上一个函数调用的结果，第一次等于initial 如果有initial的话**累加器**
* item 数组每一项
* index 当前索引
* 数组本身
  返回值： 返回累计的结果 

reduceRight类似reduce，只是从右边开始计算数组

### isArray

功能：判断是否为数组
返回值： 布尔值a

arr.some()/arr.every ()
返回值：布尔值
some：有一个符合就返回true， every：全部返回才返回true

## 数组方法总结：

### 添加/删除

* push 数组末尾添加一位元素 
* pop  数组末尾移除一位
* shift 数组开头移除一位
* unshift 数组开头增加一位
* splice(pos,deleteCount,...items)  添加 删除 增加 参数： 操作的下标，删除几位，添加的元素 改变原数组
* slice(start,end) 数组截取，从start到end，但不包括end 不传任何参数默认是复制一个数组
* concat 数组合并 

### 搜索数组

1. 用于对象

* find((func) 查找符合的第一位，查到返回元素，没查找返回undefined
* findindex(func)  查找符合的第一位元素的下标，查到返回元素下标，没查到返回 -1
* filter(func) 类似find， 但是返回的是符合函数的合集

2. 用于普通数组非对象

* indexOf（item，pos）pos从哪个下标开始查找 查找符合的第一位元素的下标，查到返回元素下标，没查到返回 -1
* includes(value) 如果数组有value 返回true，没有返回false
* lastIndexOf(item,pos) 类似indexof

### 转换数组

* sort(func) 对数组进行排序 内部是黑匣子 改变原数组
* map(func) 每个元素调用func的结果组成一个新的数组
* reverse() 翻转数组，返回数组。改变原数组
* split/join split将字符串转换为数组，join将数组转换为字符串
* reduce (func,initail) 对数组每一项调用func计算数组上的单个值，并在调用之间传递中间结果

### 其他

Array.isArray() 检查arr是否为一个数组
arr.some(fn)/every(fn) 对数组每一项调用fn,一项返回/全部返回结果为true/false

## 可迭代对象  Iterable Object

任何对象都可以被定制为可在for...of中循环使用的对象

* 可迭代的对象必须实现了Symbel.iterator方法
* 一个迭代器必须有next方法，它返回一个{done:Boolean,value:any} done:true表示迭代结束，否则value就是下一个值
* Symebol.iteratol方法会在执行for...of时自动调用，但也可以直接调用
* 内建的字符串和数组都实现了Symbol.iteratol方法
* 和类数组很像，都不是数组，都无法使用数组的方法
  语法： 

```javascript
let range = {
	from: 1,
	to: 5
};
range[Symbol.iterator] = function() {
	return {
		current: this.from,
		last: this.to,
		next() {
			if (this.current <= this.last) {
				return { done: false, value: this.current++ };
			} else {
				return { done: true };
			}
		}
	};
};
for (const num of range) {
	console.log(num);
}
```

### Array.from(obj,[ mapFn,thisArg ])

功能：全局的方法，将其转为真正的数组
参数：

1. obj可接受一个可迭代或类数组的词；
2. mapFn 是一个函数，该函数会在对象中的元素被添加前引用到每个元素上；
3. thisArg,允许我们为该函数设置this
   语法：

```javascript
let likearr = {
  0:1,
  1:2,
  length:2
}
Array.from(likearr)
```

## Map Set

### Map

是一个带键的数据项的集合，就和一个Object一样，他们最大的区别，Map允许任何类型的键；
new Map() 创建一个Map
map.set(key,value) 设置map的键和值
map.get(key) 获取键对应的值，么有则返回undefined
map.has(key) 查找map是否有key,存在返回true，不存在返回false 
map.delete(key) 删除制定的key
map.clear 清空所有的key
map.size 返回当前元素个数

* map.set返回的是map，可以直接链式调用 
  map.set(key,value).set(key,value)

#### 循环map

* map.values() 遍历并返回所有的值  
* map.keys() 遍历并返回所有的key
* map.entries() 遍历并返回所有的实体
* forEach()方法

#### Object.entries(obj) Object.fromEntries map和对象相互转换

1. Object.entries(obj)
   将对象转换为Map格式: [[ 'name','join"],[ 'age',23],]
   语法：

```javascript
let obj = {
	name:'join',
	age:23
}
let objMap = new Map(Object.entries(obj))
```

2. Object.fromEntries(map)
   1``将map转换为对象

```javascript
let map = new Map()
map.set('name',"join")
map.set('age',23)
let obj = Object.fromEntries(map)
console.log(obj);
```

### Set 

是一个特殊的类型集合---值的集合，没有键 （key）
方法：
new Set() 创建一个set，如果提供一个iterable对象。将会从数组里复制值到set中
set.add(value)  添加value，返回set本身
set.delete(value)  删除value
set.has(value) 查找value，返回布尔值
set.clear() 清空set
set.size 并不是方法， 是属性。返回元素个数

set可以使用for...in forEach遍历
注：forEach(func)func中的第二个参数index在这里为set对象的valuetarget
Map的迭代方法在Set中也适用

* set.keys () 遍历并返回所有的值
* set.values() 与map作用相同 兼容map
* set.entries () 兼容map

### Map和普通对象的区别：

* 任意键/对象都可以作为键
* 有其他的便捷方法，比如map.size属性

## WeakMap/WeakSet 弱映射和弱集合

### WeakMap

WeakMap和Map的第一个不同的点就是：WeakMap的键必须是一个对象，不能是原始值
WeakMap不支持迭代以及keys(),values(),entries(),无法循环，没有办法获取weakmap的所有键或者值
weakMap方法：

* weakMap.get(value)
* weakMap.set(key,value)
* weakMap.delete(key)
* weakMap.has(key)

#### 使用案例

* 额外数据的存储
  加入使用了第三方库或者“另一个代码的一个对象”并想存储一些与之相关的数据，那么这些数据就应该与这个对象共存亡 --可以使用WeakMap
  例如：一个对象的来访记录下来，他离开了，要清除这些数据，可以使用weakMap

### WeakSet

* 与Set类似，但我们只能向WeakSet添加对象，而不能是原始值
* 对像只有在其他某个（些）地方都被访问到的时候，才能留在set中
* 支持add,has,delete 方法。不支持size和keys(),不可以迭代

### 总结

* 优点： 它们对对象是弱引用，所以被他们引用的对象很容易地被垃圾收集器移除
* 被用作“主要”对象存储“之外”的辅助数据结构，一旦将对象从主存储器中删除，如果该对象仅被用作WeakMap/WeakSet的键，那么他们将会被自动回收

### Object.keys,values,entries 迭代

* Objec.keys 返回包含该对象所有key的数组
* Object.values 返回包含该对象所有value的数组
* Object.entries 返回包含该对象所有[key,value ]键值对的数组

注： map.keys()返回的是可迭代项目 ，Object.keys（）,而不是obj.keys()返回的是真正的数组

### 为什么是Object.keys()而不是obj.keys()?

* 因为灵活性更强，js当中对象是所有复杂结构的基础
* Object.keys返回的是一个真正的数组，而不是可迭代项目

⚠️ Object.keys,values,entries会忽略symbol属性
需要获得symbol可以使用

* Object.Object.getOwnPropertySymbols会返回一个只包含Symbol类型的键和的数组
* reflect.ownKeys(obj) 会返回所有的键

### 转换对象

* 对象转换数组进行计算步骤：

1. 将对象使用Object.entries()转换为数组；
2. 调用数组的方法 ，对其进行操作；
3. 使用Object.fromEntriess()将数组转回对象

```javascript
let prices = {
	banana: 1,
	orange: 2,
	meat: 4,
  };
  let doubelPrices = Object.fromEntries(Object.entries(prices).map(i=>[i[0],i[1]*2]))
  console.log(doubelPrices);
```

## 解构赋值

### 数组解构赋值

* 不会改变原数组
* 忽略使用逗号的元素

```javascript 
let [a,,b,c] = [1,2,3,4,5]// 2被逗号忽略
console.log(a);
console.log(b);
console.log(c);
```

* 等号右侧可以是任何可迭代对象，不局限于数组 也可以是字符串
* 实际上是对于在=右侧的值上调用for...of 并进行赋值语句的语法糖
* 赋值给等号左侧的任何内容
* 可以与Object.entries 进行循环操作 ，可以和map一起
* 交换变量值的技巧

```javascript
let a = '123';
let b = '456';
[b,a] =[a,b]
console.log(a);/// 456
console.log(b);//123
```

* ...代替其余的数组项，...xxx表示以一个参数来获取“其余”数组项目，满足项： 

  1. ...+参数名
  2. 在最后一位

* 右侧的数组比左边的变量列表短，不会报错，默认值是undefined， 可以提供默认值 
  默认值可以是复杂表达式，也可以是函数调用，类似函数默认值

```javascript
let [a=1,b=2] = []
```

### 对象解构赋值

语法：

```javascript
let {height,width} = {width:100,height:100}
```

* 左侧属性名就等于的右侧的变量名列表
* 变量的顺序并不重要
* options.width 属性赋值给名为w的变量，可以使用冒号来设置变量名称

```javascript
let {height:h,width} = {width:100,height:100}
```

冒号表示“什么值：赋值给谁“

* 使用 = 设置默认值
* 可将冒号和等于结合起来使用 width:w=200 
* 具有很多属性复杂对象，可以只提取所需的内容
* 剩余模式：... 对象拥有的属性数量比我们提供的变量数量还多的情况，剩余的变量赋值到其他地方（也是一个对象）

```javascript
let obj = {
	title:'Menu',
	width:200,
	height:200,
	background:'pink'
	
}
let {width,height,...rest} = obj
console.log(width);
console.log(height);
console.log(rest);//rest ：存有剩余属性的对象
```

* 不使用let 时的陷阱
  一般使用 let {...} = {...},不使用let会报错
   问题在于： js将{...}当作一个代码块
   需要使用

```javascript
 let width,height
 ({width,height } = obj)
```

 * 嵌套解构

```javascript
let options = {
	size: {
		width: 100,
		height: 200
	},
	items: [ 'cake', 'dont' ],
	extra: true
};
//size和items没有相应的变量，因为我们取得是他们的内容
let { size: { width, hieght }, items: [ item1, item2 ], title = 'Menu' } = options;
console.log(width);//size 是拿不到到值得
console.log(item1);
```

### 总结 

对象解构赋值完整语法
let {prop: varName = default,...resrt} = object

  1. prop这个属性会被赋值给varName，如果没有prop，会使用默认值default
  2. 没有对应映射的对象属性会被赋值给rest对象

数组解构赋值完整语法
let [ item1 = default,item2,...rest] = array

    1. 数组的第一个元素被赋值给了item1，第二个元素给饿了item2,剩下的元素被复制到了另一个数组 rest

从嵌套数组/对象中提取数据也是可以的，此时等号左侧和等号右侧必须有相同的结构

## 日期和时间

new Date()
创建一个Date对象， 其时间等于 1970年1月1日 UTC+0之后经过的毫秒数 （1/1000秒）

### 方法

new Date(datestring) 如果一个参数，并且是字符串，那么他会自动解析 
new Date(yaer,mouth,date,hours,minutes,seconds,ms)
year: 必须是四位数；
mouth: 从0开始到11月结束
date:当月的具体某一天
访问日期组件：
getFullYear()获取年份 四位数
getMouth() 获取到月份 月份 0-11 
getDate() 获取当月的具体日期， 从1-31 
getHours()，getMinutes()，getSeconds()，getMilliseconds()
获取相应的时间组件。
getTime()获取当前日期的时间戳
getTimezoneOffset() 返回UTC与本地时区之间的时差 分钟为单位

### 自动校准

32日会自动校准为 31
console.log(new Date(2021,0,32)); //2021-01-31T16:00:00.000Z

### 日期转换为数字，日期差值

let date = new Date()
console.log(+date) 等同于.getTime()

### Date.now()

相当于 new Date.getTime() 但是不会去创建Date对象，更快， 不会对垃圾处理造成额外的压力

### Date.parse(str)

参数： str: 字符串里读取的日期 ps:如果给定字符串的格式不正确，会返回NAN
格式：YYYY-MM-DDTHH:mm:ss.sssZ
YYYY-MM-DD：年-月-日
T： 分隔符
HH：mm:ss.sss 时间，分钟，秒，毫秒
Z： 单个字符Z代表UTC+0时区
**区别于其他系统。js中的时间戳是以毫秒为单位的，而不是秒**

## JSON方法 

JSON.stringify 将对象转为JSON
JSON.parse 将json转回对象

### JSON 区别传统字符串

* 字符串使用双引号
* 对象的属性名称也是需要用双引号的
  特定的js的对象属性会被JSON.stringify跳过
* undefined
* 函数属性
* symbol类型的键和值

### 不能循环引用，会失败

TypeError: Converting circular structure to JSON

### JSON.stringify(value,[ replacer ,space ]) 完整语法

value:要编码的值
replacer： 要编码的属性数组或映射函数
数组：[要编码的属性名 ]
函数：

```javascript
 let json = JSON.stringify(meetup,function replacer(key,value){
	 return  (key==='occupiedBy')?undefined:value
 })
```

space：用于格式化的空格函数 ，传入几就缩进几个空格

### toJSON

对象可提供toJSON 方法来进行JSON转换，如果可以用，JSON.stringify会自动调用它
如：日期会自动转字符串
对象提供了toJSON方法，掉用JSON.stringify会自动调用该方法

### JSON.parse()解码JSON

JSON,parse(str,func) 
第二个参数可以是函数

```javascript
let meetup = JSON.parse(str,function(key,value){
	if(key=='date') return new Date()
	return value
});
```

## 递归与堆栈

递归：当一个函数解决一个任务时候，在解决的过程中他可以调用其他很多函数，在部分情况下，函数会调用自身，这就是递归

递归深度： 最大的嵌套调用次数（包括首次）
js引擎的最大递归深度为10000以下时是可靠的

### 执行上下文和堆栈

正在运行的函数的执行过程的相关信息是被存储在其执行上下文中。
执行上下文是一个内部数据结构，它包含有关函数执行时的详细细节，当前控制流所在的位置，当前的变量，this的值，以及其他的内部细节

### 当一个函数进行嵌套调用时，将发生以下的事儿：

* 当前函数被暂停；
* 与他关联的执行上下文被一个叫**执行上下文堆栈**的特殊数据结构保存
* 执行嵌套调用
* 嵌套调用结束后 ，从堆栈中恢复之前的执行上下文，并从停止的位置恢复外部函数

 递归深度： 是值堆栈上下文的最大数量
 **任何递归都可以用循环来重写，通常循环变体更有效**

 ### 递归结构

 链表的功能：

 * 我们可以在next之外，再添加prev属性来引用前一个元素，一便轻松的来回移动
 * 我们还可以添加一个名为tail的遍历将。该变量链表的最后一个元素（并在从末尾添加/删除元素时对该引用进行更新）
 * ……数据结构可能会根据我们的需求而变化。
   缺点： 
   无法很容易的通过元素的编号获取元素

总结： 

* 递归的基础是函数参数使其任务简单到该函数不再需要进行进一步调用

## Rest参数和Spared语法

### Rest参数

可以通过使用...并在后面跟着包含剩余参数的数组名称，来讲他们包含在函数定的一种。这里的意思是：将剩余参数收集到一个数组中

* 语法：...rest收集
* rest参数必须放在参数列表的末尾

### arguments变量

* 特殊的类数组对象 // { '0': 1, '1': 2, '2': 3 }
* 箭头函数没有arguments

### Spread语法 扩展运算

* ...arr 扩展一个对象/数组
* 可以在函数调用时传递参数
* 可以展开数组，字符串，
* 语法内置迭代器来收集元素
* 只适用于可迭代对象,例如字符串，数组
* 对象不适用

#### Array.from/[...obj ]差别

 * Array.from 适用于类数组对象也适用于可迭代对象
 * [...obj ]只适用于可迭代对象
   **对一些小东西转换为数组的任务，Array.from更通用**


#### 将一个字符串转为字符串数组

```javascript
let str = 'hello'
console.log([...str]);//[ 'h', 'e', 'l', 'l', 'o' ]
console.log(str.split(''));//[ 'h', 'e', 'l', 'l', 'o' ]
console.log(Array.from(str));//[ 'h', 'e', 'l', 'l', 'o' ]
```

### 复制array/object

* 浅拷贝 [...arr ] 类似于 Object.assgin([],arr)

## 变量作用域，闭包

### 代码块 

{...} 在代码块内部声明了一个变量，该变量值在该代码块内可见
隔离变量
let /const 不可以重复声明

### 嵌套函数

定义：一个函数是在另一个函数中创建的， 该函数被称为”嵌套“函数
1：变量
词法环境对象组成：

1. 环境记录；
2. 对部词法环境的引用
   全局词法环境的变化：
3. 最初，处于未初始化的状态，这是一种特殊的内部状态，意味着引擎知道变量，但是用let声明前， 不能引用
4. let xxx定义出现了， 尚未被赋值，值是undefined
5. xxx被赋值给一个值

2： 函数声明
函数也是一个值，和变量一样， 不同之处**函数声明初始化会被立即完成**
不适用函数表达式

3:内部和外部的词法环境
**当代码要访问一个变量时， 首先会搜索内部词法环境， 然后搜索外部环境， 然后搜索更外部的环境，以此类推直到找到全局变量**
如果在任何地方都找不到这个变量，那么在严格模式下就会报错，非严格模式为了向下兼容，给未定义变量赋值会创建一个全局变量

```javascript
let p = "hello"
function say(name){
 console.log(`${p},${name}`)
}
say('john')
```

这个例子：
访问name时：会立即在内部词法环境中找到他
访问p时： 内部没有p,所以他顺着外部词法环境的引用找到了他、

4：返回函数

```javascript
function makeCounter(){
  let count = 0
  return function(){
    return count++
  }
}
let counter = makeCounter()
counter()//0
counter()//1
counter()//2
```

* 所有的函数都有名为[[ Environment]]的隐藏属性，该属性保存了对创建该函数的词法环境的引用
* 当调用counter（）时，会为该调用创建一个新的词法环境，并且其外部词法环境引用获取与counter.[[ Environment]] 
* 当counter里的代码查找count变量时， 他首先搜索自己的词法环境（为空），然后是makeCounter（）的词法变量，并且在哪里找到就在那里修改

### 闭包

闭包定义：内部函数总是可以访问起所在的外部函数中声明的变量和参数，即使在其外部函数被返回（寿命终结）之后。

* 在js中，所有的函数都是天生闭包的 
* 有一个例外，补充 todo

### 垃圾收集

当有一个嵌套的函数在函数结束之后仍可达，则它具有引用词法环境的 [[ Environment]]熟悉
至少有一个嵌套函数引用它时才存在

#### 实际开发中的优化：

js引擎会试图优化他

## var

* var 没有块级作用域
  var 声明的变量只有函数作用域和全局作用域，没有块级作用域
  var 再循环里，没有块级作用域也没有循环局部作用域
  var 穿透了if，for和其他代码块， 在js早期的时候，快没有词法环境。
* var允许重新声明
* var声明的变量，可以在其声明语句前被使用
* var声明会被提升，但是赋的值不会，依旧是undefined

### IIFE  立即调用函数表达式

语法： (function(){...})()
注意点：

* 是一个函数表达式，不需要函数名，可以立即调用
* 函数表达式被括号包裹起来， 不然会导致错误
* 代码拥有私有变量 --var

### 总结 var与cons/let 区别

1. var声明的变量没有块级作用域，他们仅当前函数可见，或者全局可见
2. var变量声明在函数开头就会被处理，脚本启动对应全局变量
3. var可以重复声明不会导致报错

## 全局对象

定义： 全局对象提供可在任何地方使用的函数和变量，默认情况下 这些全局变量内置语言或者环境中
浏览器--window
node.js--globel
统称：globalThis

* 全局对象包含应该在任何位置都可见的变量
* 通用名称 globalThis
* 值对项目而言确实是全局的时候，才应该将其存储在全局对象中，并保持其数量最少
* 在浏览器中，除非使用modules，否则使用var声明的全局函数和变量会成为全局对象的属性

## 函数对象 NFE

* 获取函数名字： sayHi.name ==>sayHi
* 获取属性length  返回函数入参的个数 ，rest参数不参与计数

 ### 自定义属性

 * 可以将函数作为对象往里添加对象，此时和let xxx属性是毫不相关的两个东西

 ```javascript
 function sayHi(){
	console.log('hi');
	count++//和sayHi.count不是同一个东西
	sayHi.count++//和let count 不是同一个东西
}
sayHi.count = 0
sayHi()
console.log(sayHi.count);
 ```

* 可以替代闭包
* 变量访问：如果count值位于外层变量中，那么外部的代码无法访问到，只有嵌套的函数可以修改他，如果他是绑定到函数上，那么就很容易

### 命名函数表达式

指通过函数表达式的形式被声明的，并且附带了名字，带有名字的函数表达式的术语，这个名字可以在该函数内部进行自调用，例如递归调用等
语法：
let sayHi = function func(){...} 
特殊的地方：

1. 允许函数在内部引用自己
2. 它在函数外是不可兼得

```javascript 
let sayHi = function(who){
	console.log(`hello ,${who}`);
}
let sayHi2  = function func(who){//制定内部函数
	 if(who){
		 console.log(who);
	 }else{
		 func('no')//可以自己调用自己
	 }

}
sayHi(123)
sayHi2()
func()//func is not defined
```

解决的问题：

* 确保函数只会引用当前函数
* 可用于函数在自身内部进行自调用

为什么不使用变量let sayHi2 来调用？
因为当函数sayHi2引用会有被重新赋值或者被切断引用的风险

## 函数声明没有这个东西 

什么时候用？
当我们需要一个可靠的内部名时，这时就可以把函数声明写成函数表达式了

总结：
函数是对象：
name属性，函数的名字
length属性，函数参数的个数，rest不计入

## new Functiony语法

语法：

```javascrpit
new Function('a','b','return a+b')// 3
```

与其他方法对比。这种方法最大的不同是在于他实际上是通过运行时通过参数传递过来的字符串创建的。

### 闭包下使用new Function

当我们使用 new Function（）创建一个函数，那么该函数的[[ Environment]]指向的是全局环境，其他函数记录的是自身创建时的环境函数，它具体指向了函数创建时的词法环境
此类函数只能访问全局变量

## setTimeout setInterval

* setTimeout 推迟到一段时间间隔之后再执行
* setInterval 重复运行一个函数，从一段时间开始间隔之后开始运行，之后以该时间间隔连续重复运行该函数

### setTimeout语法

```javascript
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

参数:
func: 需要执行的代码， 一般是函数
delay：执行前的延时，毫秒为单位，默认值是 0
arg1，arg2 要传入被执行函数的参数列表
如何停止：

1. setTimeout会返回一个定时器标识符
2. clearTimeout（定时器标识符 ）

### setInterval语法

### setTimeout嵌套setTimeout

* 嵌套的settimeout可以精准的设置两次执行之间的延时，二setInterval却不能
* 使用setInterval的时候，函数的实际调用间隔要比代码中设定的时间间隔要短！
* 嵌套的setTimeout能确保延时的固定 

### 垃圾回收和setTimeout setInterval的回调

* 将一个函数传入setTimeout和setInterval，会将其创建一个内部应用，并保存在调度程序中，这样即使这个函数没有其他应用，也能防止被垃圾回收
* 当函数引用了外部变量，这个函数还在，那么这个外部应用也会存在， 当我么不需要时，最好取消他

### 零延时的setTimeout

该函数被调用在当前脚本执行完成之后，立即执行

* 在浏览器中实际上不为0，浏览器会将setTimeout和setInterval的五层或者更多层嵌套调用的最小延时限制在4毫秒

### 导致浏览器的计时器变慢

* CPU过载
* 浏览器页签处于后台模式
* 笔记本电脑用的是电池供电

## call、apply

* fun.call(context,arg1,arg2) 用给定的上下文和参数调用fun
* fun.apply(context,args) 调用fun，将context作为this和类数组的args传递给参数列表

区别：
两者之间唯一的语法区别是：call期望一个参数列表，而apply期望一个包含这些参数的类数组对象
args的区别：
call可以接受...扩展运算符语法，可以将可迭代对象args作为列表传递给call，
apply只接受类数组args
args：数组最好使用apply，因为他更快

### 装饰器

* 是一个围绕改变函数行为的包装器，主要工作由该函数来完成
* 一个特殊的函数。它接受另一个函数并改变它的行为，与主函数代码分开，可以使主函数代码变得简单

### 方法借用

从一个对象中获取一个方法，并在另一个对象的上下文中调用它。
[].join.call(arguments)
从常规数组[].join中间借用join的方法，并使用[ ] .join.call在arguments的上下文中运行它

## bind 

返回值：是一个特殊的类似于函数的外来对象，他可以被调用，并且透明的将调用的传递给func 并设定this = context
bind函数的调用就是绑定了this的函数

* 绑定了上下文this和第一个参数（如果给定的情况）
* 参数arguments都被原样传递了，只是this变化了
* 绑定函数的上下文是硬绑定（hard-fixed）的。没有办法再修改this
* bind绑定后的函数和原来的对象是不同的，是另一个对象了
* 通过绑定先有函数的一些参数来创建一个新函数---偏函数应用程序
* 没有this只有参数传递的情况,原生bind不允许这样操作，手动实现：
  ``javascrpt
  function partial(func,...argsBound){//调用的结果是个包装器
  return function(...args){//函数包装器
    func.apply(this,...argsBound,...args)//需要使用的函数
  }
  }

### bindAll 

```javascrpt
for (const key in user) {
  if(typeof user[key] ==='function'){
    user[key] =  user[key].bind(user)
  }
}
```

## 箭头函数

* 箭头函数没有this
* 不能对箭头函数进行new操作，不能用作构造器
* 箭头函数没有arguments
* 没有super

## 对象深入

### 属性标志和属性描述符

对象属性标志：

* writable:true; true可以被修改，否则是可读的
* enumerable:true; 循环是否列出,是否枚举
* configurable：true；是否可以被删除，防止更改和删除属性标志，但是允许更改对象的值,单行道，无法通过defineProperty修改回来

通常这几项不会出现， 使用常用方式创建一个属性是，他们都为true
获取标志：

```javascript
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
```

### 修改单个属性：

Object.defineProperty()

```javascript
  Object.defineProperty(obj,'name',{
    writable:false //不可修改
    configurable:false,//不可配置
    enumerable:false//不可枚举
  })
```

### 修改多个属性：

Object.defineProperties()

```javascript
Object.defineProperties(user,{
    name:{value:'wl',writable:false},
    age:{value:25,writable:true}
})
```

Object.getOwnPropertyDescriptors()
返回包含symbol类型和不可枚举的属性在内的所有属性描述符

## 对象属性的getter和setter

两种类型的对象属性：

* 数据属性
* 访问器属性，本质是用于获取和设置值的函数

### getter/setter

在对象字面量中，他们用get和set表示

```javascript
 let obj = {
     name:"john",
     surname:'smith',
     get propName(){
       return `${this.name} ${this.surname}`
     },
     set propName(value){
       [this.name,this.surname] = value.split(
         ' '
       )
     }
   }
```

### 访问器描述符

与数据属性不同， 没有value和writable属性，但是有get和set函数
访问器描述符可能有：

* get 一个没有参数的函数，再读取属性的时候工作
* set 一个带有一个参数的函数，在当属性被设置时调用
* enumerable 
* configuarble 
  **一个属性要么是数据属性，要么是访问器属性，不能两者皆是如果同时出现get和value，那么会出错**

总结：
对象属性分为两种类型：

* 数据属性
* 访问器属性 

## 原型继承

### prototype 

* js对象有一个特殊的隐藏属性[[ prototype ]]，它要么为null要么就是对另一个对象的引用，该对象成为原型
* 使用obj.__proto__访问到他

###  __proto__实现继承

设置prototype的方法
使用__proto__继承的限制：

* 引用不能形成闭环
* __proto__的值可以是对象，也可以是null，其他类型会被忽略

**只能有一个[[prototype ]],一个对象不能从其他两个对象获得继承**

### __proto__和[[ prototype]]的区别

*  __proto__是[[ prototype]]的getter/setter
*  使用Object.getPrototypeOf/object.setPrototypeOf取代__proto__

### this的值

* 无论在哪里找到方法：在一个对象还是在原型中，在一个方法调用中，this始终是点符号 . 前面的对象
* 当继承的对象运行继承的方法时候，他们仅修改自己的状态，不会改变大对象的状态
* 方法是共享的，但数据不是

### 循环取值

* for...in 循环会迭代继承的属性
* obj.hasOwnProperty(key)  如果obj具有自己的（非继承的）名为key的属性，返回true，过滤原型属性

**几乎所有其他键、值获取方法都会忽略继承的属性，例如：Object.keys/Object.values**

### prototype 

F.prototype(不是[[ prototype]])仅在new F 被调用新对象的[[ prototype]] 赋值(构造函数建造对象的时候)

* 每个函数都有F.prototype属性，即使我们没有提供它
* 默认的prototype是一个只有constructor的对象， 属性constructor指向函数自身

```javascript
function say(){
    console.log('111');
}
console.log(say.prototype.constructor===say); //true
```

* 可以使用constructor属性来创建一个新对象，该对象使用与现有对象相同的构造器（适用于是用外面的库，但不确定使用了哪个构造器的情况 ）
* prototype 可以将整个默认的替换掉，那么其中就不会包括constructor了，为了确保正确的constructor ，我们可以选择添加、删除属性到默认的prototype，而不是将其整个覆盖

总结：

* 通过构造函数创建的对象设置[[ protptype ]]的方法
* F.prototype属性在new F 被调用时作为新对象的 [[prototype ]]赋值
* prototype要么是一个对象要么是null，其他值不起作用
* prototype属性仅在设置一个构造函数，并通过new操作符调用时，才具有特殊的影响
* 默认情况下 ，所有函数都有F.prototype  = {constructor:F}。所以我们可以通过访问他的"constructor"属性来获取一个对象的构造器

### 原生的原型

#### Object

* obj = {} 和obj = new Object()是一个意思。Object就是一个内建的对象构造函数，其自身的prototype指向一个带有toString和其他方法的一个巨大的对象
* obj.__ proto__=== Object.prototype
* Object.prototype.__ proto__ === null

#### 其他内建原型

* Array
* Date
* Function
  ...

```javascript
console.log([].__proto__.__proto__===Object.prototype);//true
console.log([].__proto__.__proto__===Object.prototype);//true
console.log([].__proto__.__proto__.__proto__);//null
```

所有内建对象的顶端都是Object.prototype
**使用原型上的方法时是会优先使用更近的方法**

#### 基本数数据类型

```javascript
console.dir(String.prototype);
console.dir(Number.prototype);
console.dir(Boolean.prototype);
```

**null和undefined没有对象包装器，没有属性和方法，并且他们没有原型**

#### 更改原生原型

* 原生的原型可以被更改
* 不建议修改
* Polyfilling （填充）是一个术语，当原生的方法在js规范中已经存在，但是js引擎不支持该方法，我们可以手动实现它，填充原型

#### 从原型中借用方法

obj.__ proto__  = Array.prototype，数组的方法可以自动在obj使用
一次只能继承一个对象， 如果已经从另一个对象进行了继承，那么这种方法也就不可行了（会覆盖已有的继承）

### 设置原型的方法

* Object.create(proto,[ descriptors]) 利用给定的proto作为 [[ prototype]]和可选的属性描述来创建一个空对象 
  语法：

```javascript
let animal = {
  eats: true
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});

alert(rabbit.jumps); // true
```

* Object.getPrototypeOf(obj) 返回obj的[[ prototype]] （与__proto__的getter相同，使用__proto__读取）
* Object.setPrototypeOf(obj) 将对象obj的[[ prototype]]设置为proto （与__proto__的setter相同,设置__proto__） 
* __proto __ 只能是一个对象或者是null，如果用户使用__proto__作为键，那么会导致error
  解决方式：

1.  let obj = Object.create(null) 创建的原型没有Object.prototype属性
2.  Map 对象

### 浅拷贝一个对象的所有描述符，克隆可枚举的和不可枚举的以及数据属性和setters/getters(还是浅拷贝)，比for in更强大

```javascript
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
```

总结：

* js对象都有一个[[ prototype]]的隐藏属性，它要么是null，要么是对另一个对象的引用通过__proto__访问
* __proto__实际是对于对象隐藏属性的[[ prototype]]的getter/setter
* 每一个构造函数都有prototype属性， 初始化的prototype里只会有一个constructor对象，这个constructor对象指向函数自身
* 在构造函数new一个实例的时候，会将其prototype属性赋值给实例，实例中读取构造函数的prototype是通过__proto__来进行读取
* 所有的对象都可以使用Object.prototype对象里的方法，所有的对象（Array,Date,Function都有其内置的prototype属性）
* Object.prototype.__proto__是null，原型链的终点是null
* 基本数据类型除了undefined和null，也有其prototype
* 修改原生原型： 
  创建一个以什么为原型的对象：Object.create 
  获取obj的__proto__  Object.getprototypeOf  
  设置obj的__proto__为xxx Object.setPrototypeof(obj,xxx)

### 再次总结

1. 每一个对象都有prototype属性，通过其proto属性来获取
2. 每个函数都有prototype属性，默认是一个对象里面有constructor属性 constructor指向函数自身
3. 每一个实例都有proto属性，该属性指向构造函数的prototype
4. 数组对象函数可以获取Object，Array，Function来获取其构造函数身上的方法
5. 原型链的重点是null


### 获取自身和获取原型属性的区别

* Object.keys/ Object.values 获取自身的可枚举的属性，不能获取原型上的属性
* for...in item是key 会获取原型上以及自身的属性的可枚举属性
* getPrototypeNames获取自身+原型上的不可枚举+可枚举的属性
* for...of item是value， 不会遍历到原型上的属性,只能遍历具有迭代器 iterator的数据， 如数组，字符串，对象不能遍历
  。。。待补充

## class类

语法：

```javascript
class User{
  constructor(name){
    this.name = name
  }
  sayHi(){
    console.log(this.name)
  }
}
let user = new User('join')
user.sayHi()
```

当newu user（）被调用时

1. 一个新的对象被创建
2. constructor使用给定的参数运行， 并将其赋值给this.name
   **类的方法之间没有逗号**

### 什么是class类

* 类是一种函数
  class User{...}做了什么？

1. 创建一个名为User的函数，该函数成为类声明的结果。
2. 储存类的方法，例如： User.prototype中的sayHi

### 区别于其他定义构造器ES5

* 类必须使用new 操作符来调用它
* 通过class创建的函数具有特殊的内部属性标记 [[ IsClassConstructor]]:true
* 类的方法不可枚举，类定义将prototype中所有的方法的enumerable标志设为true，for...in循环时，class方法不会出现
* 类总是使用use static  自动进入严格模式

### 类表达式

```javascript
let User = class myClass {
  sayHi() {
    console.log(myClass);
  }
}
```

### getters/setters

```javascript
  class User {
  constructor(name){
    this.name = name
  }
  get name(){
    return this._name
  }
  set name(val){
    this._name  = val
  }
}
let user = new User('wl')
// console.log(user.name);
user.name = 'xc'
console.log(user.name);
```

### 计算属性名称 

 [... ] : ['say'+'hi' ]类似对象字面量

## 类继承

#### exdents

语法：

```javascript
class Animal{
  constructor(name,){
    this.speed = 0;
    this.name = name
  }
  run(speed){
    this.speed = speed;
    console.log(`${this.name} runs whit speed ${this.speed}`);
  }
  stop(){
    this.speed = 0
    console.log(`${this.name} stands still`);
  }
}
let animal = new Animal('my animal')

class Rabbit extends Animal{
  hide(){
    console.log(`${this.name} hides `);
  }
}
let rabbit = new Rabbit('whith Rabbit')
rabbit.run(5)
rabbit.hide()
console.log(Rabbit.prototype.__proto__===Animal.prototype);//true
console.log(rabbit.__proto__.__proto__===Animal.prototype);//true
```

* Child.prototype.__proto __ == Parent.prototype
* 关键字extends使用了很好地旧的原型机制进行工作，它将Rabbit.prototype.[[ prototype]]设置为 Animal.prototype
* 如果在Rabbit.prototype中找不到一个方法， js就会从Animal.prototype中获取
* exdents 后允许任意表达式

```javascript
function f(phrase){
  return class {
    sayHi(){
      console.log(phrase);
    }
  }
}
class User extends f('hello'){}
let u = new User()
u.sayHi()
```

* 子组件继承的方法，可以被重写

#### super()关键字调用父类的方法

* super.method(...)调用父类一个方法 
* super() 调用一个父类的constructor（只能写在constructor中）

#### 重写constructor

* 一个类继承另一个类，并且没有constructor，那么会生成空的constructor
* **继承类的constructor必须调用super（），并且要在使用this前调用**
  为什么？
* 当通过new 执行一个常规函数时候，他将创建一个空对象，并将空对象赋值给this （常规是先创建空对象，在通过this赋值）
* 当类 继承的constructor执行时，他不会执行此操作，它期望父类的constructor来完成这项工作（class是需要先有this，在赋值）
* 派生的（子类）的constructor必须调用super才能执行其父类的constructor，否则this指向的那个对象永远不会创建，并且会报错
* 父类的构造器总是会使用它自己字段的值，而不是被子类重写的那一个

 #### [[ HomeObject]]用于super的实现，为什么通过super（）可以调用父组件的constructor

* 单纯通过this指向来执行__proto__会造成循环引用
* 在js中，[[ HomeObject]]仅被用作super
* [[ HomeObject]] 不能被修改， 他会记住他们的对象。
  **箭头函数没有自己的this或super，他们能融入就近的上下文，就像透明的

## 静态属性和静态方法

定义： 可以把一个方法作为一个整体赋值给类，这样的方法被称为静态的

### 静态方法

语法：

```javascript
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
```

* static方法的this指类本身
* static声明的方法是整个class类的方法

### 静态属性

```javascript
class User {
  static publisher  = 'levi ding'
}
```

### 继承静态属性和方法

子类可以继承父类的静态属性和方法
原理：
使用原型，extend使子类的[[ prototype]]指向了父类(Child.__proto __=== Parent)。
子类函数原型继承父类
子类的prototype指向父类的prototype
子类实例的 __proto_ _指向其构造函数

### class Rabbit extends Object和 class Rabbit的区别

class Rabbit extends Object意味着：

1. Rabbit.prototype.__proto __ === Object.prototype
2. Rabbit.__proto __ === Object

class Rabbit 意味着：
Rabbit.__proto __ ===Function.prototype

## 私有的和受保护的属性和方法

### 内部和外部接口

* 内部接口：可以通过该类的其他方法访问但不能从外部访问的方法和属性
* 外部接口：也可以从类的外部访问的方法和属性

### 类中如何确定私有的

* 受保护的属性通常以下划线 _作为前缀， 是约定俗成的
* 只读的，只给类中的属性设置getter，而不设置setter
* 语言级的支持， 方法和属性名前添加 #  表示该字段为私有的特殊标志，我们无法从外部或继承的类中访问他

### 封装：

面向对象编程而言，外部接口和内部接口的划分被称为封装

## 扩展内建类

```javascript
 class PowerArray extends Array{
            isEmpty(){
                return this.length ===0
            }
            // static get [Symbol.species](){
            //     return Array
            // }//Symbol.species是其以什么构造函数去构造实例，这里返回的是array,会导致 实例不能使用PowerArray身上的方法

        }

        let arr = new PowerArray(1,2,3,4,5,10,60)
        alert(arr.isEmpty())
        let fiterArr = arr.filter(item=>item>=10)
        console.log(fiterArr);
        console.log(fiterArr.isEmpty());//可以在filter结果数组上继续使用powerArray的方法

```

### 内建类没有静态方法继承

## 类检查 ：instanceof

作用： 用来检察一个对象是否属于某个特定的的class，同时它还考虑继承
instanceof操作符
语法：

```javascript
obj instanceof Class
```

* obj隶属于Class类或者class衍生类，则返回true
* 和构造函数一起使用
* 与Array之类的内建class一起使用
* instanceof 在检查中会将原型链考虑在内
  obj instanceof Class算法执行的大致过程：

1. 如果这有静态方法 symbol.hasInstance 直接调用（执行instanceof 时会直接调用）
2. 没有Symbol.hasInstance方法的情况下：
   obj._ _proto__ === Class.prototype? 
   obj._ _proto__._ _proto__ === Class.prototype?
   obj._ _proto__._proto__._proto__=== Class.prototype?
   如果任意一个答案为true。那么就返回true，
   如果已经检查到了原型链的尾端都没有，则返回false

* 对于实例。只需要对比一次
* 对于继承，需要对比两次

### objA.isprototypeOf(objB) 

如果objA处于objB的原型链中， 则返回true，但是class的constructor自身是不参与检查的，检查过程之和原型链以及class.prototype有关

### Object.prototype.toString方法来揭示类型

可以将其视为typeof和instanceof的替代版来使用

#### Object.prototype.toString.call(arr)

```javascript
console.log(  Object.prototype.toString.call([]));//Array
console.log(  Object.prototype.toString.call({}));//Object
console.log(  Object.prototype.toString.call('213'));//String
console.log(  Object.prototype.toString.call(123));//Number
console.log(  Object.prototype.toString.call(NaN));//Number
console.log(  Object.prototype.toString.call(true));//Boolean
console.log(  Object.prototype.toString.call(null));//Null
```

使用call方法在上下文this=arr中执行函数toString

#### Symbol.toStringTag

* 自定义对象的toString方法

```javascript
let user = {
    [Symbol.toStringTag]:'user'
}
alert({}.toString.call(user))
console.log(window[Symbol.toStringTag]);//Window
console.log(XMLHttpRequest.prototype[Symbol.toStringTag]);//XMLHttpRequest
console.log({}.toString.call(window));//[object Window]
console.log({}.toString.call(new XMLHttpRequest()));//[object XMLHttpRequest]
```

## 类型检查方法总结

* typeof 用于原始数据类型，无法区分array/object 返回值：string
* {}.tostring 用于原始数据类型，内建对象， 包含symbol.toStringTag属性的对象  返回值 ：string
* instanceof 用于对象，检查是否存在原型链上、是否继承 返回值：true/false 适用于类的层次结构
* constructor 返回所有变量的构造函数

## class类总结

* class类本质是一种函数，与ES5不同的地方：必须new ，方法属性不可枚举，自动开启严格模式
* get/set 给属性添加getter/setter
* 类的继承通过extends关键字实现继承，将子类的prototype.__proto__ ==父类的prototype
* 子类的constructor构造器必须使用super（）函数，这是因为class类是先绑定的父类的this在父类的constructor里来完成工作，而es5的new一个对象是先创建一个空对象，再将空对象赋值给this
* super（）基于[[ homeObject]]实现
* class中定义一个静态属性和方法 使用关键字static ，供给class类使用，并且可以实现继承
* 类中的私有属性（受保护属性）可以使用约定俗成的 _下划线命名法、只设置getter不设置setter方法、方法属性前添加#来给class类添加语言特性、
* 类检查 instanceof，检查左边的是否位于右边的原型上顺着__proto__去查找

## Mixin模式

概念： 包含可被其他类型使用而无需继承的方法的类
Mixin： 是一个通用的面相对象编程术语： 一个包含其他类的方法的类

## try...catch

语法：

```javascript
try{
  ...代码
} catch(err){
  //错误捕获
}
```

* try...catch的代码会先执行try,遇见错误的代码再执行catch
* try...catch仅对运行时的error有效，必须是有效地JavaScript代码，如果代码包含语法错误，那么try...catch将无法正常工作
* try...catch是同步代码，里面的异步代码会被忽略
* catch(err) js生成一个包含有关其详细信息的对象， 然后该对象作为参数传递给catch
  * ReferenceError error名称
  * message 关于error的详细文字描述
  * stack 当前的调用栈，目前调试目的的一个字符串

* catch可以不包括err
* try...catch...finally 都是局部变量


### throw操作符

throw会生成一个error对象
语法

```javascript
  throw  {name:'dd',message:'11'}
```

### js内建的标准error构造器

```javascript
        let error = new Error('wer')
        let syntaxerror = new SyntaxError('wer')
        let referenceerror = new ReferenceError('wer')
        console.log(error);
        console.log(syntaxerror);
        console.log(referenceerror);
```

### 再次抛出错误

catch应该只处理他知道的error，并‘抛出“所有其他的error

* 使用instanceof判断类型

### finally

```javascript
        try {
            alert('try')
            if(confirm('Make an error ?'))BAD_CODE()
        } catch (error) {
            alert('catch')
        }finally{
            alert('finally')
        }
```

* finally 句子通常用在：当我们开始做某事的时候，希望无论出现什么情都要完成某个任务
* 在try中有一个return， finally会控制转向外部代码前被执行，也就是finally会先执行
* try...finally也是有效地， 不想处理error的情况

### 全局catch 

* 浏览器环境： window.onerror 
  作用： 将错误信息发送给开发者

```javascript
<script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };
  function readData() {
    badFunc(); // 啊，出问题了！
  }
  readData();
</script>
```

## 自定义error，扩展error

* 可以正常从Error和其他内建的Error类中进行继承
* name属性可以通过 this.name = this.constructor.name来获取正确的类名
* instanceof来检查特定error，第三方库可以使用name属性来检查
* 包装异常：用于处理低级别异常并创建高级别error而不是各种低级别error的函数

## 回调

JavaScript主机（host）环境提供了许多函数，这些函数允许我们计划异步行为，换句话说，我们现在开始执行的行为，但他们会在稍后完成
setTimeout就是异步函数

* 基于“回调”的异步编程风格， 异步执行某项功能的函数应该提供一个callback参数用于在相应事件完成时调用

```javascript
  function loadScript(src, callback) {
            let script = document.createElement('script')
            script.src = src
            script.onload = ()=>callback(script)
            document.head.append(script)
        }
        loadScript('./test.js', function(script){
            console.log(script);
            newFn()
        })
```

* 在回调中回调
  需要继续嵌套写

```javascript
    loadScript('./test.js', function(script){
            console.log('执行回调1');
            loadScript('./test2.js', function(script){
            console.log('执行回调2');
             
            })
        })
```

* 处理error
  Error优先回调
  约定：

1. callback的第一个参数是error而保留的，一旦出现error，callback（err）会立刻调用；
2. 第二个参数用于成功的结果，此时callback（null，result1，result2 ）就会被调用。。。

 ```javascript
     function loadScript(src, callback) {
            let script = document.createElement('script')
            script.src = src
            script.onload = () => callback(null, script)
            script.onerror = () => callback(new Error(`no script src ${src}`))
            document.head.append(script)
        }
        loadScript('./2test.js', function (err, script) {
        if (err) {
            console.log(err);
        } else {
            //正常处理业务逻辑
        }

        })
 ```

## promise

语法：

```javascript
 let promise =  new Promise(function (resolve,reject){
      //executor
 })
```

### executor

* executor自动调用
* executor接受两个参数：resolve，reject

* 当new Promise被创建时，executor会自动运行，他包含最终应产出结果的生产者代码。
* resolve,reject 是由JavaScript自身提供的回调，我们的代码再executor的内部
  * resolve（value）： 如果任务成功完成并带有结果value
  * reject （error）： 如果任务出现error， error即为error对象
    总结： executor会自动运行并尝试一项工作， 尝试结束后，如果成功则调用resolve，如果error则调用reject

### new Promise promise返回的对象

* state ： 最初是peding,resolve被调用时：fulfilled，reject被调用时变为：rejected
* result ：最初是undefined，resolve(value)被调用时为value，reject（error）被调用时 为error
  最终的两种状态：

1. state：'peding',result:undefined ====> state:'fulfilled' ,result:value
2. state:'peding',result:undefined =====> state:'rejected',result:error

* 只会有一个结果或者一个error，任何状态的改变都是最终的，不会再变了

### then, catch,finally

将结果或error，使用then，catch，finally为消费函数进行注册

#### then

```javascript
let promise = new Promise(function (resolve, reject) {
            console.log(1);
            setTimeout(() => {
                // resolve(123)
                reject(new Error('whoops'))
            }, 1000);
        })
        promise.then(
            (value) => {
                console.log(value);
            }, (err) => {
                console.log(err);

            }
        )
```

* 第一个参数是一个函数， 该函数在promise resolved之后运行并接收结果
* 第二个参数也是一个函数，该函数在promise rejected后运行并接受error
* then可以只编写一个，只编写一个就是只有成功的回调

#### catch

```javascript
let promise = new Promise(function (resolve, reject) {
            console.log(1);
            setTimeout(() => {
                // resolve(123)
                reject(new Error('whoops'))
            }, 1000);
        })
        promise.catch(

            (err) => {
                console.log(err);

            }
        )
```

只对error感兴趣的情况
是对.then(null,f)的模拟，是一个简写语法糖

#### finally

* 类似常规try...catch...finally ，总是在promise被resolve或者reject时执行
* 执行清理的很好处理程序，例如无论结果如何，都停止使用不再需要的加载指示符

#### promise和普通回调的区别

* promise允许我们按照自然顺序进行编码
* 可以根据需要，在promise上多次调用.then每次调用都会在订阅列表中添加一个新的回调函数

#### .then返回promise 构建异步行为链

## 使用promise进行错误处理

* 在链式调用.then的结尾使用.catch，捕获错误
* 隐式try...catch,catch不仅会显示捕捉rejected，还会捕捉它上面的处理程序意外出现的error

```javascript
 new Promise((resolve,reject)=>{
    throw new Error('whoops')//隐式抛出错误，变为rejected
}).catch(err=>alert(err))
```

### 再次抛出

* .catch处理完成后，下一个成功的.then处理程序就会被调用
* .catch不能处理的错误，会抛给下一个.catch里去处理

### 未处理的rejection（全局事件捕捉）

对于在 promise 中未被处理的 rejection：脚本死了，并在控制台留下错误信息
js会生成全局error， 使用onhandledrejection（html标准） 事件来捕捉此类error

## Promise API 

promise中有六类静态方法

### Promise.all

#### resolve的情况：

* 当给定的promise都resolve时， 新的promise才会resolve，将结果数组成为新promise的结果。
* 结果数组与源promise的顺序相同，即使花费的时间不一样

#### reject的情况

* promise.all任意一个promise被reject， 由Promise.all返回的promise就会立刻reject，并且带有的就是这个error
* 如果出现了error，其他promise将会被忽略，立马reject，完全忽略列表其他promise，他们的结果也会被忽略

#### 允许除了promise之外的其他值，promise.all会按照原样传递给结果数组

```javascript
   let p =   Promise.all([
            new Promise((resolve,reject)=>{setTimeout(() => resolve(1), 1000)}),
            2,
            {name:'xwl'}
        ])
        p.then(console.log) //[1,2,{name:'xwl'}]
```

#### Promise.allSettled返回所有的promise数组

```javascript
 Promise.allSettled(
           urls.map(url=>fetch(url))
        ).then(results=>{
            console.log(results);
            results.forEach((result,num) => {
                if(result.status==='fulfilled'){
                    console.log(`${urls[num]}: ${result.value.status}`);
                }else{
                    console.log(`${urls[num]}: ${result.reason}`);

                }
            });
        })

```


##### polyfill Promise.addSettled

```javascript
        Promise.myAllSettled = function (promises) {
            const convertedPromises = promises.map(p => {
               return Promise.resolve(p).then((value)=>{
                   return {status:'fulfilled',value}
                }, (reson)=>{
                    return {status:'rejected',reson}
                })
            });//返回一个全部为成功的promise数组， 其中包括失败的和成功的
            return Promise.all(convertedPromises);
        };
```

### Promise.race

只等待第一个settled的Promise并获取其结果，成功或失败都可以

### Promise.any

* 只等待第一个fulfilled的promise，并将这个fulfilled的promise返回
* 如果promise都rejected，那么则返回javascript标准内置对象： AggregateError,可以在AggregateError错误类型的error实例的error属性中可以访问到失败的promise的error对象

### Promise.resolve/reject

Promise.resolve(value),用结果value创建一个resolved的promise
Promise.reject(error) 用error创建一个rejected的promise

### 总结：

* **Promise.all(promises)** 等待所有的promise都变成resolve，返回存放他们结果的数组， 如果给定的任意一个promise为reject，那么他们就会变成Promise.all的error， 所有其他promise的结果都会被忽略
* Promise.race(promises) 返回第一个fulfilled或者rejected的promise
* Promise.allSettled(promises)返回所有的promise结果以对象数组的形式返回他们的结果 {status："fulfilled/rejected",value:/reson}
* promise.any(promises) ES2021年新增， 等待第一个fulfilled的promise，将其作为结果返回， 所有的promise都为rejected，会抛出一个aggregateError错误类型的error实例
* promise.resolve(value) 使用给定value创建一个resolve，promise
* promise.reject(value) 使用给定error创建一个rejected的promise
* promise.then 没有return了 返回undefined

### promisifacation 

定义：指接受一个回调的函数转换为一个返回promise的函数
promisify 即指 promise 化
包装promisefy函数

```javascript
  //传入一个函数使其promisefy
         function promisefy(f,manyArgs = false){
             return function (...args){
                 return new Promise ((resolve,reject)=>{
                     function callback(err,...rest){
                         if(err){
                             reject(err)
                         }else{
                             resolve(manyArgs?rest:rest[0])
                         }
                     }
                      
                 args.push(callback)
                 f.call(this,...args)
                 })
             }
         }
```

## 微任务 Microtask

Promise的.then .catch .finally都是异步的

### 微任务队列 Microtask queue

 v8术语

* 队列： 先进先出，首先进入队列的会先执行
* 只有在JavaScript引擎中没有其他任务在运行时，才开始执行任务队列中的任务
  当一个promise准备就绪时， .then/.catch/.finally会被放入微任务队列中，但他们不会立即被执行， 当JavaScript引擎执行完当前代码，他会从队列中获取任务并执行它

出现错误的情况：
如果一个promise的error未被在微任务队列的末尾进行处理，没有.then/catch/finally 则会出现未处理的rejection,浏览器的unhandledrejection会捕捉到这个错误.

## async/await

### Async function

```javascript
  async function f(){
               return 1
           }
           f().then(alert)
```

* async加在函数的开始： 即这个函数总是返回一个promise，其他值被自动的包装在一个resolved的promise中
* async 确保一个函数返回一个promise， 也会将非promise的值包装进去

### Await

* 只在async函数中工作
* await让JavaScript引擎等待直到promise完成settle并返回结果
* **await会暂停函数的执行**，直到promise的状态变为settled，然后以promise的结果继续执行，这个行为不会浪费CPU资源， js可以同步进行其他任务，执行其他脚本
* 不能在普通函数内执行await
* await 可以在一个支持.then的对象中使用await， 允许使用 thenable对象（那些具有可调用的then方法的对象）
* 在class中使用 直接加上async即可

### error处理

* 函数内使用try...catch

```javascript
  async function f() {
            try {
                await Promise.reject(new Error('whoops'))

            } catch (error) {
                alert(error)
            }
        }
        f()
```

* 在函数调用的后面使用.catch()来处理这个error

**使用了async、await就不用.then/catch了， 并且使用的是try...catch代码块包裹错误，而不是使用.catch**

### async/await可以和Promise.all一起使用

### 总结

async：

* 让这个函数总是返回一个promise
* 允许函数内使用await

await:

* js引擎会等待该promise settle
* try...catch来包裹错误

async、await是基于promise的

## Generator

常规的函数只会返回一个单一值
generator函数可以按需一个接一个的返回（yield)多个值，他们可以与iterable完美结合，创建数据流

### Generator函数

语法：

```javascript
 function * generatorSequence(){
     yield 1;
     yield 2;
     return  3;
 }
 let generator = generatorSequence()
 alert(generator) //[object Generator]
```

 * 主要方法 next() ，next（）调用时他会执行直到最近的yield< value >语句（value可以没有，默认为undefined，然后代码暂停，并将产出的yielded值返回到外部代码
 * next()调用的结果始终是具有两个属性的对象
   * value yield返回的值
   * done generator函数是否结束，结束为true， 没结束为false
   * 在done为true后接着调用done，会返回相同的对象：{done：true}

 **function* f(){ } / function *f(){  }两种方法都对，但倾向于前者**

### Generator函数是可迭代的

* 可使用for...of 循环(只会循环yield不会循环return，因为当done：true forof不会再循环)

### Generator结合 ...扩展运算符

```javascript
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}
let sequence = [0, ...generateSequence()];
alert(sequence); // 0, 1, 2, 3
```

### Generator组合

将一个generator流插入到另一个generator流的自然方式，它不需要使用额外的内存来存储中间结果

### yield是一条双向路

可以往yield里面传递数值

```javascript
function* gen() {
  let ask1 = yield "2 + 2 = ?";
  alert(ask1); // 4
  let ask2 = yield "3 * 3 = ?"
  alert(ask2); // 9
}
let generator = gen();
alert( generator.next().value ); // "2 + 2 = ?"
alert( generator.next(4).value ); // "3 * 3 = ?"
alert( generator.next(9).done ); // true
```

### generator.throw

 try ...catch捕获异常

 ```javascript
   function* gen(){
           try {
            let result = yield "2 + 2 = ?"
            alert("The execution does not reach here, because the exception is thrown above")
           } catch (error) {
               alert(error)
           }
             
        }
        let generator = gen()
        let question = generator.next().value
        generator.throw(new Error("The answer is not found in my database"))
 ```

### Generator.return终止generator

* 完成generator的执行并返回给定的value
* 将{done：true，value："return给定的值'}
* 再次调用gen.next()/gen.return都是返回{value:undefined,done:true}

## generator 异步

* 需要具有Symbol.asyncIterator方法
* 必须带有一个next（）方法的对象，next（）方法会返回一个promise
* 这个next（）方法可以不是async，可以是一个返回值是一个promise的常规方法
* 无法与...扩展运算符（spread）语法异步工作

## 模块  

### 历史

* AMD require.js库实现的
* CommonJs 为node.js服务器创建的模块系统
* UMD 另外一个模块系统

### 模块

一个模块就是一个文件，一个脚本就是一个模块，模块之间可以互相加载，export和import可以互相交换功能
export：标记了可以从当前模块外部访问的变量和函数
import：关键字允许从其他模块导入功能

模块核心功能：

* 始终使用 use strict

```javascript
<script type="module">
        a = 5//报错
<script>
```

### 模块作用域

* 每个模块都有自己的顶级作用域。顶级作用域变量核函数在其他脚本中是不可见的
* 在HTML中，每个< script type="module"> 都存在独立的顶级作用域，他们彼此看不见顶级变量
* 模块代码仅在第一次导入时被解析，代码只会执行一次，即第一次被导入时
* 如果我们需要多次调用某些东西，我们应该将其以函数的形式导出，

### import.meta

import.mata对象包含当前模块信息

### 在一个模块中，this是undefined

```javascript
<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script>
```

### 浏览器使用模块脚本的顺序

* 浏览器使用模块脚本总是被延迟的，与defer特性对外部脚本和内联脚本的影响相同
* < script  type="module">...不会阻塞HTML的处理，他们会与其他资源并行加载
* 模块脚本会等到HTML文档完全加载完毕，然后才会运行
* 保持脚本的书写顺序， 在文档中排在前面的脚本会先执行

### Async异步加载 适用于内联脚本

* 对于非模块脚本。async属性仅适用于外部脚本
* 对于模块脚本，它也适用于内联脚本

### 外部脚本

* 具有相同src的外部脚本只运行一次
* 从一个源获取的外部脚本需要CPRS header

**不允许裸模块**
**兼容性nomodule，兼容type=“module”旧时浏览器不兼容**

### 构建工具

### 做了什么?

* 从一个打算放在html主文件中的< script type="module>的主模块开始
* 分析它的依赖：它的导入，导入的导入
* 将所有的模块构建成一个文件，或者多个文件（可以调整），并且打包函数代替原生的import调用，使其正常工作，支持HTML、css等特殊的模块类型

### 可能引用的其他转化和优化

* 删除无法访问的代码
* 删除未使用的导出（tree-shaking）
* 删除特定的开发类似于 console.log,debugger这样的语句
* 可以使用babel将前言的现代js语法转换为具有类似功能的旧的js语法
* 压缩生成的文件。 如删除空额。， 用短的名字替换变量
  **PS：如果我们·使用打包工具， 那么脚本会被打包进一个单一文件（或几个文件），在这些脚本中的import/export语句会被替换成特殊的打包函数（bundlerfunction），因此最终打包好的import/export 不需要type=module， 可以将其正常的放在常规的script中

```javascript
<!-- 假设我们从诸如 Webpack 这类的打包工具中获得了 "bundle.js" 脚本 -->
<script src="bundle.js"></script>
```

总结：

* 一个模块就是一个文件，浏览器需要使用< script type=module>使import、export可以正常工作
 * 默认是延迟执行的
 * async可用于内联脚本
 * 要从一个源获得加载另一个外部脚本。，需要CORS header
 * 重复的外部脚本会被忽略，同名的src会被忽略
* 模块有自己的顶级作用域
* 模块始终开启严格模式 use strick
* 模块代码只执行一次，导出仅创建一次，然后在导入之间共享

## 导入和导出

### 在声明前导出

* 声明之前防止export 来标记任意声明为导出，无论什么的是变量、函数、类都可以
* 导出class、function 后没有分号

### 导出和声明分开(统一暴露)

* export 暴露一个对象

```javascript
// 📁 say.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // 导出变量列表
```

* import引入对象 使用解构赋值

```javascript
// 📁 main.js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
```

#### 为什么明确导入的内容

* 现代构建工具 webpack和其他都将模块打包到一起进行优化， 并删除未使用的代码，如果引用了第三方库，但只使用了少量的函数，那么优化器就会检测到它， 并从打包好的代码中删除那些未被使用的函数，从而使构建树更小，这就是所谓的摇树 tree-shaking
* 名称更短 sayHi（）而不是 hello.sayHi（）
* 导入的显式列表可以更好地概述代码结构：使用的内容和位置。它使得代码支持重构，并且重构起来更容易。

### import as export as 取别名

### export default 默认导入

* 包含库或者函数包的模块
* 单个声明实体的模块，例如模块user.JS仅导出class user
* 将其导入的时候不需要花括号
* 暴露 export default
* 导入： import User from "./user.js"

### default关键字

* 用于将函数与其定义的分开导出；
* 将所有东西作为 * 导入，那么default属性是默认的导出

```javascript
// 📁 main.js
import * as user from './user.js';

let User = user.default; // 默认的导出
new User('John');
```

**经量使用命名导出，import {user} from user ，命名导出名字是确定的，以防团队成员使用不同的名称导入相同的内容

### 重新导出

```javascript
export {sayHi} from './say.js'; // 重新导出 sayHi
export {default as User} from './user.js'; // 重新导出 default
```

* 实际工作希望通过单个入口暴露包的功能，在单个文件中从新导出所有引入的包，然后在统一暴露出去
* export ...from 和import ...from 区别：export在当前文件中不可用。
* 在export...from 中使用默认导出：
  单独处理

```javascript
export * from './user.js'; // 重新导出命名的导出
export {default} from './user.js'; // 重新导出默认的导出
```

**在块级作用域中书写的import/export代码无效**

## 动态引入

### import（）表达式

* import（module）表达式加载模块并返回一个promise ，该promise resolve 为一个包含其所有导出模块的对象
* 异步函数中： await import（modulePath）

```javascript
     let {sayHi,sayBye} = await import('./hello.js')
      sayBye()
      sayHi()
```

* import()是一种特殊的语法，但并不是一个函数！！


## proxy和reflect

### Proxy 

```javascript
 let target = {}
let proxy = new Proxy(target,{})
```

* target --要包装的对象， 可以是任何东西，包括函数
* handler -- 代理配置 ，带有捕捉器的对象， 比如get捕捉器用于读取target属性，set捕捉器用于写入target属性。

### 带有get捕捉器的默认值

* target 是目标对象，该对象被作为第一个参数传递给proxy
* property 目标属性名
* receiver 如果目标属性是一个getter访问其属性，则receiver就是本次读取属性所在的this对象

```javascript
let numbers  = [0,1,2]
numbers = new Proxy(numbers,{
    get(target,prop){
        if(prop in target){
            return prop
        }else{
            return 0
        }
    }
})

alert(numbers[1])
alert(numbers[123])
```

### 使用set捕捉器进行验证

* target 是目标对象，该对象作为第一个参数传递给new proxy
* property 目标属性名称
* value 目标属性的值
* receiver 与get捕捉器蕾丝，仅与setter访问其属性相关
* 在proxy里数组的内建方法是有效的， 代理对象proxy不会破坏任何东西，不需要重写push，unshift等添加元素的方法

### 使用“ownKeys"和“getOwnPropertyDescriptor进行迭代

## generator 异步

* 需要具有Symbol.asyncIterator方法
* 必须带有一个next（）方法的对象，next（）方法会返回一个promise
* 这个next（）方法可以不是async，可以是一个返回值是一个promise的常规方法
* 无法与...扩展运算符（spread）语法异步工作

## 模块  

### 历史

* AMD require.js库实现的
* CommonJs 为node.js服务器创建的模块系统
* UMD 另外一个模块系统

### 模块

一个模块就是一个文件，一个脚本就是一个模块，模块之间可以互相加载，export和import可以互相交换功能
export：标记了可以从当前模块外部访问的变量和函数
import：关键字允许从其他模块导入功能

模块核心功能：

* 始终使用 use strict

```javascript
<script type="module">
        a = 5//报错
<script>
```

* 模块作用域
  todo
  ·

 ## proxy和reflect

### Proxy 

```javascript
 let target = {}
let proxy = new Proxy(target,{})
```

* target --要包装的对象， 可以是任何东西，包括函数
* handler -- 代理配置 ，带有捕捉器的对象， 比如get捕捉器用于读取target属性，set捕捉器用于写入target属性。

### 带有get捕捉器的默认值

* target 是目标对象，该对象被作为第一个参数传递给proxy
* property 目标属性名
* receiver 如果目标属性是一个getter访问其属性，则receiver就是本次读取属性所在的this对象

```javascript
let numbers  = [0,1,2]
numbers = new Proxy(numbers,{
    get(target,prop){
        if(prop in target){
            return prop
        }else{
            return 0
        }
    }
})

alert(numbers[1])
alert(numbers[123])
```

### 使用set捕捉器进行验证

* target 是目标对象，该对象作为第一个参数传递给new proxy
* property 目标属性名称
* value 目标属性的值
* receiver 与get捕捉器蕾丝，仅与setter访问其属性相关
* 在proxy里数组的内建方法是有效的， 代理对象proxy不会破坏任何东西，不需要重写push，unshift等添加元素的方法


### 使用 “ownKeys” 和 “getOwnPropertyDescriptor” 进行迭代

* 在Proxy中使用ownKeys来拦截for...in对user的遍历，并使用Object。keys和Objeck.values来跳过下划线_开头的属性

```javascript
let user = {
    name:'join',
    age:30,
    _password:"***"
}
user = new Proxy(user,{
    ownKeys(target){
        return Object.keys(target).filter(key=>!key.startsWith('_'))
    }
})
for (const key in user) {
     alert(key) //name.age
}
alert(Object.keys(user))
alert(Object.values(user))
```

* 如果Proxy中不存在的键， O布局额常用，keys不会列出ownKeys返回值，因为Objeck.keys返回的仅仅是存在带有enumerable标志的对象，可以拦截[[ GetOwnProperty]]的调用并返回enumerable：true的描述符

```javascript
user = new Proxy({},{
    ownKeys(target){
        return  ['a','b','c']
    },
    getOwnPropertyDescriptor(target,prop){
        return{
            enumerable:true,
            configurable:true
        }
    }
})
for (const key in user) {
     alert(key) //a,b,c
}
alert(Object.keys(user))
```

### 具有deleteProperty和其他捕捉器的受保护属性

* 约定俗成： 以下划线_开头的属性和方法是内部的，不应从对象外部访问他们

### Proxy中的has(target,prop){}方法

* 调用in操作符检查是否存在proxy对象中，会调用proxy中的has方法

### 包装函数：“apply”

```javascript
function delay(f,ms){
    return new Proxy(f,{
        apply(target,thisArg,args){
            setTimeout(() => {
                return target.apply(thisArg,args)
            }, ms);
        }
    })
}
function sayHi(user){
    alert(`hello,${user}!`)
}
sayhi= delay(sayHi,2000)
alert(sayhi.length)
sayhi('join')
```

参数：target：目标对象； thisSArg是this的值；args是参数列表

* 使用proxy代替包装函数可以将所有东西转发到目标对象（name，length属性）

## Reflect

内建对象，简化proxy的创建

* **对于每个可被Proxy捕获的内部方法，在Reflect中都有一个对于的方法，其名称和参数与Proxy捕捉器相同**----所以我们使用Reflect来将操作转发给原始对象，捕获器get和set都透明的好像不存在一样，将读取/写入操作转发到对象
* Reflect.get 读取一个属性对象
* Reflect.set 写入一个对象属性，写入成功返回true，失败返回false

### 为什么实用reflect而不直接使用getter

* 如果出现了继承的情况从代理读取那么属性时，get捕捉器会被触发，并从原始对象返回target[prop ]属性，若prop是一个getter，它将在this=taget上下文中运行其代码，因此结果是来自父（原始）对象的target.name 
* 使用reflect可以正确的传送this给getter，常规函数可以通过call/apply，但getter只是能被访问

### Proxy局限性

#### 内建对象：内部插槽 Proxy无法拦截

* map，set，date， Promise 都使用了内部插槽

```javascript
        let map = new Map()
        let proxy = new Proxy(map, {
            get(target, prop, receiver) {
                let value = Reflect.get(...arguments);
                return typeof value == 'function' ? value.bind(target) : value;
            }
        })
        proxy.set('test', 1)
        alert(proxy.get('test'))
```

* 将get捕捉器将函数属性绑定到了目标对象本身
* 私有字段会导致代理proxy中断
* 如果使用原始对象作为键，然后对其进行代理， 之后就无法找到钱代理了，因为代理之后是一个不同的对象

### 可撤销的Proxy

* 使用revoke进行撤销，proxy.revoke = revoke 来绑定revoke到proxy
* WeakMap配合使用

```javascript
  let obj = {
            data:'valueble data'
        }
        let {proxy,revoke} = Proxy.revocable(obj,{})
        alert(proxy.data)
        revoke()//撤销代理
        alert(proxy.data)//error1
```

### 总结

* Proxy是对象的包装器，将代理上的操作转发到对象，并可以选择捕获其中的一些操作，他可以包装任何类型的对象，包括类和函数
* 读取（get），写入 set，删除 deleteProperty
* 函数调用 apply捕捉器
* new 操作 constructor捕捉器
* reflectApi旨在补充Proxy，对于任意Proxy捕捉器都带有一个相同参数的Reflect调用，可以使用他们将调用转发给目标对象
  Proxy的局限性：
* 内建对象具有内部插槽，如 Map Set 等对这些对象的访问无法被代理
* 私有字段也是如此，需要具有目标对象作为this才能访问他们
* 对象的严格相等性检查 === 无法被拦截
* 性能： 最简单的代理访问数学所需要的时间也要长几倍

## Reference Type

* 一个动态执行的方法可能会丢失this

### obj.method（）语句中的两个操作

* 点取了属性obj的method的值
* 接着（）执行了

**为确保 user.hi() 调用正常运行，JavaScript 玩了个小把戏 —— 点 '.' 返回的不是一个函数，而是一个特殊的 Reference Type 的值。**

* reference type是ECMA的一个“规范类型”
* reference type的值由三个类型组成：
  * base： 对象
  * name: 属性名
  * strict 在use strict 严格模式下为true

### 为什么会丢失this

```javascript
   let obj = {
       name:'join',
       say(){
           console.log(this.name);
       }
   }
   let say =obj.say 
   say()//undefinde this丢失
```

1. user.hi 访问的结果不是一个函数，而是一个Reference Type的值
2. 当（）被在Reference Type上调用时，他们会接受到关于对象和对象方法的完整信息，然后可以设置正确的this
3. 任何例如hi = user.hi的等或者 || 操作，转换为一个不包含允许设置this信息的普通值。都会将Refrence Type 丢失，而会取一个函数的值并继续传递，所有后续操作都将丢失了this


## BigInt

* 创建方式： 数字字面量+n,或者调用bigInt函数
* 支持大多数常规数字类型数字运算符，返回的也是bigInt
* 不可以将bigInt和常规数字一起混合使用
* 需要转换，可显示转换
* 不支持一元加法需要转换为数字使用Number()
* 和数字一起使用==为true， ===false
* 0n 为假 

## Eval 执行代码字符串

* 接收一条代码字符串，返回最后一条语句的结果
* 能访问外部变量，更改外部变量 
* 严格模式下，eval有自己的词法环境外部无法访问eval声明的函数和变量，未启用严格模式，eval没有属于自己的词法环境，可以外部访问eval的函数和变量
* eval中的代码没有使用外部变量，需要使用window.eval来调用
* 此外，如果你的代码需要从外部作用域获取数据，请使用 new Function，并将数据作为参数传递给函数。

## 函数柯里化 currying

关于函数的高阶技术， 还用于其他编程语言
定义：函数的转换： 将一个函数从可调用的f(a,b,c) 转换为可调用的 f(a)(b)()
用法：

```javascript
function curry(f){
    return function(a){
        return function(b){
            return  f(a,b)
        }
    }
}
function sum (a,b){
    return a+b
}
let currysum  =curry(sum)
alert(currysum(1)(2))
```

* 柯里化函数接受一个函数curry(f)，返回一个包装器 function(a)
* 当被包装器后的函数currysum调用时，他的参数会被保存起来，然后返回一个新的包装器function（b)（闭包）
* 当包装器以2被调用时，它将调用传递给原始的sum函数

```javascript
function curry(func){
    return function curried(...args){
        if(args.length>=func.length){ //(1)
            return func.apply(this,args)
        }else{
            return function(...args2){(2)
                return curried.apply(this,args.concat(args2))
            }
        }
    }
}
//第一步传入的参数和原始函数定义的参数长度一样或者更长，那么只需要调用func.apply方法将调用参数传递给他 执行即可
//第2步获取一个偏函数， 目前还没有调用func， 取而代之的是，返回另外一个包装器pass， 将重新应用于curried中。将之前的参数一起传递，利用递归将参数一次一次合并成最终需要的参数，在传入给原始func进行调用


function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert( curriedSum(1, 2, 3) ); // 6，仍然可以被正常调用
alert( curriedSum(1)(2) ); // 6，对第一个参数的柯里化
alert( curriedSum(1)(2)(3) ); // 6，全柯里化
```