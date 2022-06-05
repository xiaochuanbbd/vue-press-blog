## 浏览器事件简介

事件是指某事发生的信号。所有的DOM节点都生成这样的信号（但事件不局限于DOM）
鼠标事件：

* click 鼠标点击元素是
* contextmenu  鼠标右键点击一个元素时
* mouseover/mouseout 鼠标指针移入/离开一个元素时
* mousedown/ mouseup 元素上按下释放鼠标按钮时
* mousemove 鼠标移动时

键盘： 

* keydown/keyup 按下和松开一个按键时

表单： 

* submit 当访问者提交了一个form时
* focus 当访问者聚焦于一个元素

document

* DOMContentLoaded 当HTML的加载和处理均完成，DOM被完全构建完成时

css事件
 transitionend 当一个css动画完成时

### 事件处理程序

 为了对事件作出响应，我们可以分配一个 处理程序（handler）—— 一个在事件发生时运行的函数。

* HTML中使用：
  <input value="Click me" onclick="alert('Click!')" type="button">

* DOM 中使用
  elem.onclick = function(){}

### this

事件处理函数中的this的值指的是对应的元素

* 不要对事件名使用setAttrobute
* DOM 属性是大小写敏感的。

### addEventListener  / removeEventListener 

elem.addEventListener(event,handler,options) 绑定事件

* event: 事件名
* handler ：回调函数
* options：附加可选对象
  * once:true 只触发一次
  * capture：事件处理的阶段。由于历史原因，options 也可以是 false/true，它与 {capture: false/true} 相同。
  * passive: true 那么处理程序将不会调用preventDefault() 不默认行为
    elem.removeEventListener(event,handler,options) 移除事件
    ！ 需要移除处理程序，我们需要传入与分配的函数完全相同的函数。


####  只能通过addEventListener绑定的事件

* DOMContentLoaded 事件，该事件在文档加载完成并且DOM构建完成后触发
* transtionend css过渡加载完之后的时间

####  事件对象event

 event对象， 作为参数传递给程序

 * event.type 事件类型
 * event.currentTarget 与this一样
 * evet.clientX/clientY 指针事件的窗口相对坐标

 #### handleEvent 对象处理程序

## 冒泡和捕获

### 冒泡

当一个事件发生在一个元素上，它会首先运行在该元素上的处理程序，然后运行其父元素上的处理程序，然后一直向上到其祖先上的处理哦程序

* 几乎所有事件都会冒泡（focus事件不会冒泡）

#### event.target

引发事件的那个**嵌套层级最深的元素**被称为目标元素，可以通过event.targeta访问
event与this的区别

* event.target: 引发事件的目标元素，在冒泡过程中不会发生变化
* this：当前元素，其中有一个当前正在运行的处理程序

#### 停止冒泡

* event.stopPropagation()阻止冒泡 停止向上移动，不阻止当前元素上的处理程序运行
* event.stopImmediatePropagation()用于停止冒泡，并阻止当前元素上的处理程序运行

**不要没有需要的时候停止冒泡**

### 捕获

DOM事件标准描述了事件传播的3个阶段：

1. 捕获阶段： 事件从window向下走近元素
2. 目标阶段： 事件到达目标元素
3. 冒泡阶段： 时间从元素上冒泡

* elem.addEventLisenter(...,true)表示设置了捕获 true是{captrue:true}的简写
* elem.removeEventLisenter(...,true)需要和绑定事件设置一样的参数

#### 捕获冒泡总结：

* event.target —— 引发事件的层级最深的元素。
* event.currentTarget（=this）—— 处理事件的当前元素（具有处理程序的元素）
* event.eventPhase —— 当前阶段（capturing=1，target=2，bubbling=3）。

## 事件委托

如果我们有许多以类似方式处理的元素，那么就不必为每个元素分配一个处理程序 —— 而是将单个处理程序放在它们的共同祖先上。

* event.target.closest('selector') 方法返回与 selector 匹配的最近的祖先。
* 对于文档级的处理程序，始终使用addEventListener

## 浏览器默认行为胡

### 触发浏览器默认行为：

* 点击链接 -- 触发导航到url
* 点击表单的提交按钮 --  触发提交到服务器的行为
* 文本上按下鼠标按钮并移动 -- 选中文本


### 阻止浏览器行为

* addEventListener绑定事件： event.preventDefault方法
* on(event)，不是用的addEventListener,  return：false即可

### a标签相较于button的区别

* a标签右键单击--在一个新窗口打开链接， button和span等无法实现
* 搜索引擎能搜索到

### 处理程序选项：passive

addEventListener中的passive：true 告诉浏览器，该行为不会被阻止，对于某些移动端的事件（像 touchstart 和 touchmove）， 告诉浏览器处理程序不会取消滚动 。

如果默认行为被阻止， event.defaultPrevented值会变为true，否则为false


## 自定义事件

### 事件构造器

```javascript 
let event = new Event(type[ ,options])
```

### 参数：

* type： 事件类型，  字符串表示名字
* options： 可选项：（默认为false）
  * bubbles:true/false true表示会冒泡
  * cancelble:true/false true表示默认行为会被阻止

### 触发事件： dispatchEvent

```javascript
<button id="elem" onclick="alert('Click!');">Autoclick</button>
<script>
  let event = new Event("click");
  elem.dispatchEvent(event);
</script>

```

### 其他自定义事件

其他像 MouseEvent 和 KeyboardEvent 这样的原生事件的构造器，都接受特定于该事件类型的属性。例如，鼠标事件的 clientX。 

### 自定义事件 new CustomEvent

#### new CustomEvent 和 new Event的不同

 * 第二个参数可以与事件一起传递任何自定义信息添加一个附加参数

### 自定义事件需要阻止默认行为需要先将options:cancelable:true，否则 event.preventDefault()调用将会被忽略

### 自定义事件是同步执行的 ，浏览器事件是异步的

解决办法： 将dispatchEvent放在onclick末尾执行，或者将其包括在 setTimeout中执行

## 鼠标事件

* mousedown/mouseup 点击释放鼠标
* mouseover/ mouseout 移入移出
* mousemove 移动
* click 点击
* dblclick 双击
* contextmenu 右键打开上下文

### 事件顺序

mousedown==》mouseup==》click 

### 防止复制 oncopy

### 总结

* 鼠标事件有以下属性：
  按钮：button。

* 组合键（如果被按下则为 true）：altKey，ctrlKey，shiftKey 和 metaKey（Mac）。
  如果你想处理 Ctrl，那么不要忘记 Mac 用户，他们通常使用的是 Cmd，所以最好检查 if (e.metaKey || e.ctrlKey)。
* 窗口相对坐标：clientX/clientY。
  *文档相对坐标：pageX/pageY。

## 移动鼠标

* mouseover/out
  mouseenter/leave

### mouseover/mouseout,relatedTarget 

**relatedTarget**：是对target的补充，当鼠标从一个元素离开并去往另外一个元素师，其中一个变成了target， 另外一个是relatedTarget 

* 对于mouseover：
  event.relatedTarget  :鼠标来自的那个元素 relatedTarget ==》target
  event.target : 鼠标移过的那个元素 
* 对于mouseout
  event.relatedTarget==>鼠标离开的元素
  event.target ==> 鼠标移入的元素 当前指针的元素
* event.relatedTarget 可以是null

### 鼠标在快速移入和移出时会跳过一些元素，此时的relatedTarget就为null

### mouseout/mouseover 

* 鼠标指正随时可能位于单个元素上 ---嵌套最多的那个元素 （z-index最大的那个）
* 后代的mouseover事件会冒泡


### mouseoenter/mouseleave 

* 元素内部与后代之间的转换不会产生影响
* 事件mouseenter/mouseleave 不会冒泡
* 无法事件委托，因为不会冒泡

## 鼠标拖放事件

document.elementFromPoint(clientX, clientY) 获取坐标点下的元素
返回给定的窗口相对坐标处的嵌套的最深的元素，如果同一坐标上有多个重叠的元素，则返回最上面的元素

### 总结

1. 事件流： ball.mousedown -->document.mousemove ==> ball.mouseup (取消原生ondragstart)
2. 拖动开始时，记住鼠标指针相对于元素的初始偏移 shiftX、shiftY，拖动过程中持续调用函数 保持不变
3. 使用 document.elementFromPoint检查鼠标指针下的“droppable"

## 键盘事件

* keydown==> 在按下键时 
* keyup ==> 释放按键时候

### 键盘事件特性

* code 按键代码
* key 非字符的按键


## 滚动  scroll

* 根据用户在文档中的位置显示/隐藏其他控件或信息。
* 当用户向下滚动到页面末端时加载更多数据。

### 防止滚动

css:overflow:hidden

## 表单

* document.forms 文档中的特殊表单合集
* form.elements 获取任何元素
* form[index/name ] 访问元素（去掉element）,但修改后还是可以返回到，因为form允许我们使用两个名字（name属性）
* name = "input"  ==> input.form 反向引用到表单

### 表单元素

* input和 textarea 
* select和option 
  * options 当前的子元素集合
  * value 当前option的value
  * selectedIndex 当前option的编号
  * new Option 创建一个Option元素

### 聚焦 focus/blur

* focus 聚焦
* blur 失去焦点
* tabIndex 允许非表单元素聚焦，移动焦点 elem.tabIndex 可写

#### focus/blur 委托

* focus和blur不会向上冒泡
* 冒泡操作：
  * 将程序置于捕获状态
  * 使用focusin 和focusout事件（需要使用addeventlistener来绑定事件


### 事件： change，input，cut，copy，paste

* change ： 失去焦点，移开焦点会触发，修改选项后触发change事件
* input ： 修改表格的值触发，鼠标粘贴，或者使用语音识别都会（无法使用event.preventDefault()）
* 事件：cut，copy，paste
  * 发生在 剪贴、拷贝。粘贴一个值的时候
  * 可以使用event.preventDefault()
  * document.getSelection()得到被选中的文本

### 表单 ：事件和方法提交

#### form.submit()

* 提交表单两种方式
  1. 点击 <input type="submit"> 或 <input type="image">
  2. 在 input 字段中按下 Enter 键。

* submit和click的关系： 使用Enter发送表单时：会在submit上触发一次click事件
* 手动调用提交服务器
  form.submit()

## 页面生命周期

### DOMContentLoaded

浏览器已经完全加载HTML，并构建了DOM树， 但img和样式表之类的外部样式资源可能未加载完成，此时DOM以及就绪，处理程序可以查找DOM节点， 并初始化接口

* 需要使用addEventListener捕获
* 触发条件： dom树准备就绪 
* 遇见< script >标签会等待脚本执行结束
* async属性不会阻塞
* document.createElement('script)也不会阻塞
* 一般不会等待样式表。 但样式如果后面有一个脚本。那么脚本会等待样式表加载完成后执行
* 浏览器在DOMContentLoaded中执行自动填充表单

### window.onload

* 当整个页面， 包括样式，图片和其他资源加载完成之后执行

### window.onunload

* 当访问者离开页面时，分析数据可以通过（navigator.sendBeacon(url.data)将数据保存在我们的服务器

### window.onbeforeunload

* 访问者触发离开页面的导航，或试图关闭窗口 
* event.preventDefault()不起作用

### readyState DOM加载状态信息

* loading ---正准备加载
* interactive ---文档被全部读取
* complete --- 文档被全部读取，并且所有资源（图片等）都已加载完毕

## 脚本：async，defer

### defer：

* 具有defer特性的脚本不会阻塞页面
* 具有defer特性的脚本总是要等到DOM解析完毕，但在DOMContentLoaded事件之前执行
* 同时使用defer属性的脚本， 按照代码的上下顺序执行
* 仅适用于外部脚本（带有src属性的脚本）

### async

* 浏览器不会因为async而阻塞
* 其他脚本不会等待async脚本，async也不会等待其他脚本
* DOMContentLoaded和异步脚本不会彼此等待
  * 可能在DOMContentLoaded之前
  * 也可能在DOMContentLoaded之后
* 仅适用于外部脚本，没有src属性会被忽略

### 动态脚本

* 默认情况下 ，动态脚本的行为是异步的
* 显示设置：script.async = false 可以改变规则，变为defer一样的规则

### 实际应用

* defer用于需要整个DOM的脚本或和脚本的相对执行顺序很重要的时候
* async用于独立脚本，如计算器和广告这些脚本的相对顺序无关紧要

## 资源加载

### onload

在脚本加载并执行完成时触发

### script.onerror 

发生在脚本加载期间的error会被error事件跟踪到
**PS：onload和onerror 只跟踪加载本身**
如果需跟踪脚本： window.onerror 全局处理程序

### 特使加载资源

* img需要等到src后才开始加载
* iframe 加载完会触发 iframe.onload事件

### 跨域问题

* 域名端口好协议不同即产生跨域，及时是子域， 也会跨域

#### 允许跨域：

script标签需要具有crossorigin特性，并且服务器必须提供特殊的header
三个级别的资源访问

* 无crossorigin特性--- 禁止访问
* crossorigin= "anonymous"服务器响应带有 "*" 或origin的header：Access-Control-Allow-Origin；允许访问，浏览器不会将授权信息和cookie发送到远程服务器
* crossorigin="use-credentials" —— 如果服务器发送回带有我们的源的 header Access-Control-Allow-Origin 和 Access-Control-Allow-Credentials: true，则允许访问。浏览器会将授权信息和 cookie 发送到远程服务器。

## DOM 变动观察器

### MutationObserver

内置对象，它观察DOM元素的添加删除元素并在检测到更改时触发回调

* config 要观察的内容选项用于优化

### 用途

* 用于集成， 第三方脚本将某些内容添加上我们的文档， 检测变化时候使用
* 架构：例如编程的网站， 使用mutationsobserver来自动监测何时在页面中插入了代码块，并高亮显示他们

### 其他方法：

* observer.disconnect() 停止观察
* observer.takeRecords（） 获取尚未处理的变动记录表中记录的是已经发生，但回调暂未处理的变动。
* observer.takeRecords（）不会触发回调函数，返回的记录被从处理队列中移除

### 垃圾回收：

* 管哈气在内部对节点使用弱引用 一个节点被DOM移除了，并且该节点变得不可访问，那么它就可以被垃圾回收
* 观察到DOM节点不能阻止垃圾回收

## 可选

用于选择两种的API：

1. 对于文档： Selection和Range对象
2. 对于input、textarea： 其他方法和属性

### Range对象

### Selection 

* document.getSelection()
* 设置选择：

```javascript
let selection = document.getSelection();
// 直接：
selection.setBaseAndExtent(...from...to...);

// 或者我们可以创建一个范围并：
selection.removeAllRanges();
selection.addRange(range);
```

### textarea光标

elem.selectionStart/elem.selectionEnd获取光标位置或者移动光标

### 使其不可选

* css： user-select:none
* onselectstart或mousedown 阻止默认行为
* 我们还可以使用 document.getSelection().empty() 来在选择发生后清除选择。很少使用这种方法，因为这会在选择项消失时导致不必要的闪烁。

## 事件循环，宏任务和微任务

### 事件循环

一个JavaScript引擎等待任务，执行任务和进入休眠状态等待更多任务这几个状态之间转换的无限循环
算法：

1. 当有任务时
   * 从最先进入的任务开始执行
2. 休眠直到再次出现人物，转入第一步
   任务：

* 当外部脚本 < script src=...> 加载完成时，任务就是执行它
* 当用户移动鼠标，任务就派生出mousemove事件和执行处理程序
* setTimeout时间到达时， 任务就是执行其回调
  细节：

1. 引擎执行任务时永远不会进行渲染（render),如果任务之心需要很长时间， 仅在任务执行完成后才会绘制对DOM的修改
   2， 如果一项任务执行发费的时间过长， 浏览器将无法执行其他任务，例如处理用户事件， 浏览器会抛出一个“页面无响应”之类的井盖，终止这个业务，一般像死循环或者程序错误

### 安排一个新的宏任务

* 可以将过于繁重的计算任务拆分成多个部分，以使得浏览器能够对用户事件作出反应

### 宏任务和微任务

微任务：

* queueMicrotask(func)对func进行排队，已在微任务队列中执行
* promise
  **每个宏任务执行完成之后，引擎会立即执行微任务队列中的所有任务，然后再执行其他的宏任务或渲染，或进行其他操作**