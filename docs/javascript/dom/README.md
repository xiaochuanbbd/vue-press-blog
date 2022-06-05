## 浏览器环境规格

### window

* 是JavaScript代码的全局对象
* 代表了浏览器窗口，并提供了控制它的方法

### 文档对象模型 （DOM)

* 将所有页面内容表示为可修改的对象，document对象是页面的主要“入口点”，我们可以使用它来更改或者创建页面上的任何内容
* DOM不仅仅用于浏览器，有的非浏览器的设备也是用dom

### 浏览器对象模型 BOM

表示由浏览器（主机环境）提供的用于处理文档、（document）之外的内容的其他对象

* navigator提供了有关浏览器和操作系统的背景信息
* locatiion对象允许我们读取当前URL, 并可以将浏览器定向到新的url
* alert ,confirm,prompt 也是BOM一部分，代表与用户通信的纯浏览器方法

### DOM树

* HTML文档的主干是标签
* 每一个HTML标签都是要一个对象， 嵌套的标签是闭合标签的“子标签 （children）”。文本也是一个对象

### DOM树结构

* 标签被称为元素节点
* 文本节点text：元素内的文本
* 注释comment--也会成为DOM的一部分

### 浏览器的自动修正

* 文件中只有一个单词，浏览器会把他包装到html和body中，并且添加head
* 没有关闭的标签，浏览器会再读取标签是填补缺失的部分

## 遍历DOM

* < html > = document.documentElement
* < body > = document.body
* < head > = document.head
  **body的值可能是null，脚本在head中的情况，脚本访问不到document.body** 
* 在document世界中， null==不存在

### 子节点childNodes，fristChild，lastChild

* 子节点： 对应的是直系的子元素， 完全被嵌套在给定的元素中
* 子孙元素： 嵌套在给定元素中的所有元素，包括子元素，以及子元素的子元素等

* childNodes是一个集合，列出了所有的子节点， 包括文本节点
* firstChild和lastchild属性是访问第一个和最后一个子元素
* hasChildNodes检查节点是否有子节点 返回值 ：true、false

### DOM集合

* childNodes 是一个集合，并不是一个数组
* 可以使用for...of 循环，因为集合是可迭代的，提供了所需要的的Symbol.interator属性
* 无法使用数组的方法，因为不是数组，需要使用数组的方法 请使用 Array.from（）转换为真数组
* DOM集合是刻度的，不能使用childNodes[i ]去替换子节点
* DOM集合是实时的
* 不要使用for...in来遍历集合

### 兄弟节点和父节点（不单指元素节点）

* 兄弟节点是指同一个父节点的节点 下一个兄弟节点： nextSibing，上一个：perviousSibling
* 父节点：parentNode

### 纯元素节点 （仅指元素节点）

* 元素节点的子带节点： children
* 第一个子元素节点：firstElementChild 
* 最后一个子元素节点： lastElementChild
* 兄弟元素节点：下一个： nextElementSibling，上一个：perviousElementSibling
* 父元素节点：parentElement

**一般parentNode和parentElement属性通常是一样的：获取父节点。**
唯一例外：
```js
alert( document.documentElement.parentNode ); // document
alert( document.documentElement.parentElement ); // null
```

### 表格元素

```js
* table.rows 获取表格行组成的集合 可使用 table.rows[0]获取
* table.caption/tHead/tFoot — 引用元素 < caption>，< thead>，< tfoot>。
* thead，tbody,tfoot元素提供了rows属性
  * tbody.rows表格内部tr合集
* tr
  * tr.cells — 在给定 <tr> 中的 <td> 和 <th> 单元格的集合。
  * tr.sectionRowIndex — 给定的 <tr> 在封闭的 <thead>/<tbody>/<tfoot> 中的位置（索引）。
  * tr.rowIndex — 在整个表格中 <tr> 的编号（包括表格的所有行）
* td和th
  * td.cellIndex 封闭tr中单元格的编号
```

## 精准搜索 

* document.getelementById(css) 或者直接使用id
  PS:直接使用id。如果有js赋值的情况下，优先js(一般不用这个)
* elem.querySelectAll(css)，最通用方法,返回给定element中与给定css选择器匹配的所有元素（合集）
  * 适配任何选择器
  * 可以使用伪类
* elem.querySelector(css) 调用返回选择器选择的第一个元素
* elem.matches（css） 检查elem是否与给定的CSS选择器匹配，返回值 true/false
* elem.closest(selector) 查找与css选择器匹配的最近的祖先 
* getElementsBy*
  * getElementsByTagName(tag) 查找具有给定标签的元素，并返回他们的集合， tag参数可以是 “*”
  * ele.getElementsByClassName(classname) 返回具有给定class类的元素
  * ele.getElementsByName（name) 返回在文档范围内具有给定name特征的元素
  * 以上都返回一个集合
  * 以上都是elements不是element
  * 实时的集合
    **与querySelectAll的区别是 querySelectAll是静态的集合，而getElementsBy *是动态的**

## 节点属性：type，tag,content

### DOM节点类

* EventTarget 类---根抽象类，作为让所有DOM节点都支持事件
* Node ----抽象类，充当DOM节点的基础， 提供树的核心
* Element ---DOM元素的基本类，提供了元素记得导航
* HTMLElement ---所有HTML元素的基本类，各种HTML元素均继承自他
  * HTMLInputElement 
  * HTMLBodyElement
  * HTMLAnchorElement 
    **节点的全部属性和方法都是继承的结果**
    DOM节点是常规的JavaScript对象，他们使用基于原型的类进行继承
    body==>HTMLBodyElement==>HTMLElement ==>Element ==>Node==> EventTarget ==>Object

### nodeType属性

* ele.nodeType==1 元素节点
* ele.nodeType==3 文本节点
* ele.nodeType==9 document对象
* 只能读取 不能修改

### 标签 nodeName/tagName

* tagName属性仅适用于element节点
* nodeName是为任意Node定义的
  * 对于元素与tagName一样
  * 其他节点类型 有对于节点类型的字符串
* 如果在元素节点上使用。两者没有区别
* 标签名始终大写

### innerHTML

* 允许将匀速中的HTML获取为字符串的形式
* 也可以修改塔
* 使用innerHTML插入script标签。脚本不会执行
* innerHTML += 会进行完全的重写
* innerHTML+=做的工作：移出旧的内容，添加新的innerHTML
  因为内容已“归零”并从头开始重写，因此所有的图片和其他资源都将重写加载。

### outerHTML：元素完成html

* 读取时返回包含元素的完整HTML
* 写入时： 不会改变元素，直接替换他
* 赋值不会修改DOM元素，而是将其从DOM中删除并在其位置插入新的HTML

### nodevalue、data

获取文本节点的内容

* textContent :读取或者纯文本,提供了对元素内的文本访问权限，仅文本， 去掉所有< tag >
  * 和innerHTML对比:  使用in呢人HTML我们将其作为HTML插入， 带有所有HTML标签
  * textContent:将其作为文本插入， 所有符号均按字面意义处理。（比较安全）

### hidden属性

指定DOM元素是否可见

* 与display：none；做的事情相同

### 其他：

* value < input>
* href < a>
* id

### 总结

* 每一个DOM节点都是一个特定的类，这些类形成层次结构，完整的属性和方法集是继承的结果
* nodeType  --- 查看节点的类型
* nodeName/tagName 大写，只读
  * tagName 查看元素名 
  * nodeName查看元素名，以及非元素节点名 
* innerHTML  查看元素的HTML内容（解析标签） ，可读可写
* outhrHTML 元素完整的HTML（包括标签），可写的操作不会修改元素本身，可读可写
* nodeValue/data  非元素节点的文本内容，一般使用data，可以被修改
* textContent 元素节点内的文本，去掉< tag >后的，可读可写
* hidden 隐藏属性， 与display：none相同
* document 类： document==> HTMLDocument==>Document==>Node==>EventTarget==>Object
* body类：body==>HTMLBodyElement==>HTMLElement ==>Element ==>Node==> EventTarget ==>Object


## 特性和属性 （Attributes特性 和 properties属性）

### DOM属性

* DOM节点是常规JavaScript对象，可以更改
  * 可以添加属性
  * 可以添加方法（this指向也是点语法前面的）
* 可修改内建属性的原型，例如修改 Element.prototype 为所有元素添加一个新的方法

```javascript
Element.prototype.sayHI= function(){
  alert('hello')
}
document.body.sayHI()

```

* 有很多值
* 大小写敏感

## HTML特性

* 标准特性可以获取
* 非标准特性需要通过方法 
  * elem.hasAttribute(name) --- 检查特性是否存在
  * elem.getAttribute(name) --- 获取这个特性值
  * elem.setAttribute(name,value) ---设置特性值
  * elem.removeAttribute(name) --- 删除特性
  * elem.attributes 获取所有特性
* HTML特征有以下几点特征：
  * 大小写不敏感，在html中大写都是小写
  * 值是字符串

### 属性--特性同步

* 当属性或者特性被修改 对于的属性会自动更新，几个特例除外
  * value：改变HTML特性值 value 会更新DOM属性，更改DOM属性不会更改HTML特性。场景： 当用户行为可能会导致value的变更，但这些操作之后想恢复原始值， 该值就在HTML特性。

### DOM属性是多类型的

* 普遍是字符串
* 也有对象 如style
* input.checked:布尔值
* href，DOM属性是一个完整的URL，getAttribute（）是href中的值

### 非标准的特性，dataset

* 支持自己书写HTML特性
* 所有data-开头的特性均被保留供程序员使用，他们可在dataset属性中使用
  * data-vue 通过： elem.dataset.vue读取
  * data-vue-react 通过：elem.dataset.vueReact 驼峰命名法
  * 可读取，可修改


## 修改文档 Document

### 创建一个元素

* document.createElement('div') 使用给定的标签，创建一个元素节点
* ducument.createTextNode('here i am') 使用给定的文本创建一个文本节点

### 插入方法

* node.append(...node or string) 向node的**末尾**插入节点或者字符串
* node.prepend(...node or string) 向node的**开头**插入节点或者字符串
* node.before(...node or string) 向node的**前面**插入节点或者字符串
* node.after(...node or string) 向node的**后面**插入节点或者字符串
* node.replaceWith(...node or string) 将node**替换**为给定的节点或者字符串
* 插入的文字都作为文本插入，不会作为html代码。因此会省略< >

#### insertAdjacentHTML/Text/Element

1. **elem.insertAdjacentHTML(where,html)** 使用最多  插入的是 html 

 * beforebegin 将html插入到elem前
 * afterbegin 将html插入到elem开头
 * beforeend 将html插入到element 开头
 * afterend 将html插入到elem后

2. elem.insertAdjacentText(where,text) 插入的是 text文本
3. elem.insertAdjacentElement(where, elem) 插入的是 一个元素

### 节点移除

* node.remove()
  **元素交换，一个元素移动到另外一个地方，无需从原来的位置删掉， 所有的插入方法都会自动从旧位置删除该元素**

### 节点克隆

elem.cloneNode(true/false)

* true: 深克隆，具有所有特性和子元素
* false 不包括子元素

### DocumentFragment

特殊的DOM 节点，原来传递节点列表的包装器（wrapper）
可以向其附加其他节点，但当我么将其插入某个位置时候，则会插入其内容

### 久远的其他insert/remove方法

* parentElem.appendChild(node) 在parentElem最后添加一个node为子元素
* parentElem.insertBefore（node,nextSibing）在parentElem的nextSibing前插入node
* parendElem.replaceChild(node,oldChild) 将parendElem的后台中的oldChild替换为node
* parendElem.removeChild(node) 移除node
  这些方法都会返回插入/删除的节点

 ### document.write 

* 将html写入页面
* 只在页面加载时工作
* 不涉及dom的修改


###  总结

* 创建节点的方法
  * document.createElement(tag) 用给定的标签创建一个元素节点
  * document.creareTextNode(value) 创建一个文本节点 （很少使用）
  * elem.cloneNode(deep) 克隆节点， deep =true 深克隆
* 插入和移除节点的方法
  * node.append(nodes or string) 在node末尾插入
  * node.prepend(node or string) 在node开头插入
  * node.before(node or string) 在node之前插入
  * node.after(node or string) 在node之后插入
  * node.replaceWirh(node or string) 替换node
  * node.remove() 移除node
* 旧时的插入和移除节点
  * parent.appendChild(node)
  * parent.insertBefore(node,nextSibing)
  * parent.removeChild(node)
  * parent.replaceChild(newElem,node)
* elem.insertAdjacentHTML(where,html)
  * beforebegin 将html插入到elem前面
  * afterbegin 将html插入到elem后面
  * beforeend 将html插入到elem开头
  * afterend 将html插入到elem末尾

## 样式和类

### className和 classList

* elem.className 对应着 html中的class
  * 可读可写
* elem.classList 对单个类进行操作
  * add（class） --添加类
  * remove（class） --- 删除类
  * toggle（class） --- 不存在就添加，存在就移除
  * contains(class)  --- 检查是否存在， 返回true，false

### 元素样式

* style 
  * 可读可写
  * 多词使用驼峰命名法
  * 浏览器前缀也是驼峰命名法

### 样式重置

* document.body.style.display = "" 将属性设置为空字符串， 浏览器通常会引用css类以及内建样式，就好像没有style属性一样
* style.cssText 来完全重写
  * 可读可写
  * 覆盖样式，完全重写
    **单位需要添加**

### 计算样式： getComputedStyle

* ele.style只能获取 style内联样式起作用，无法对css书写的样式生效
  解决办法： getComputedStyle(elem,[pseudo ])
  * element 要读取样式值的元素
  * pseudo 伪元素， 例如::before（不写既不需要，意味着元素本身）
  * 只读

```javascript
    alert(computed.margin)
```

## 元素大小和滚动

### offsetParent ,offsetLeft/Top

### offsetParent: 最接近的祖先]

  * offsetLeft,offsetTop提供相对于offsetParent左上角的x/y坐标
    祖先元素：

    1. css定位的position为absolute，relative，fixed；
    2. td,th,table
    3. body

  * offsetParent的值为null的情况：

    1. 对于未显示的元素（display：none）
    2. 对于< body>< html>元素
    3. 对于带有position：fixed的元素

####  offsetWidth/offsetHeight

  * 提供了外部的width/height，完整大小，包括边框，padding， 滚动条
  * 计算 offsetWidth = width + padding + border + 滚动条
* 未显示的元素。 几何属性为0/null(如一个元素（或其任何祖先）具有display：none，或不在文档中，则所有几何属性均为零)

### clientTop/left Width/Height

#### clientTop/left

* 测量边框（相对坐标），并不是边框的width/height
* clientLeft === 左边框宽度
* clientTop === 上边框宽度

#### clientWidth/Height

* 提供元素边框内区域的大小（不包括滚动条）
* 计算： clientWidth = width+ padding
* 没有padding时可以用来计算内容区域的大小

### scrollWidth/Height

和 clientWidth类似，但包括滚动出不可见的部分

#### scrollLeft/scrollTop

元素滚动到多少了
scrollLeft/scrollTop 是可修改的


### 不要从css中获取width/height

* css的width和height受box-sizing控制
* css的width和height可能是auto
* 滚动条

### clientWidth和width的区别

* clientWidth的值是数值，而getComputedStyle(elem).width返回的是已px作为后缀的字符串
* getComputedStyle(elem).width会返会非数值的width，如auto
* clientWidth会包括padding，而css with(box-sizing)不包括padding
* 如果有滚动条clientWidth总是会减去滚动条，而width则根据浏览器来

## window大小和滚动

### 窗口的大小和width和height

* document.documentElement.clientWidth/clientHeight 会除开浏览器的滚动条宽度和高度

### 获得当前滚动

* DOM元素的当前滚动状态在其scrollLeft/scrollTop属性中
* window.pageYOffset 顶部滚动的距离
* window.pagexOffset 左侧滚动的距离
  * window.pageXOffset 是 window.scrollX 的别名。
  * window.pageYOffset 是 window.scrollY 的别名。

### 滚动： scrollTo,scrollBy,scrollIntoView

**必须在DOM完全构建后才能通过JavaScript滚动页面**

* window.scrollTo(pageX,pageY) 将页面滚动至绝对坐标的pageX,pageY的位置（可见部分左上角相对于文档的坐标）
* window.scrollBy(pageX,pageY) 将页面滚动相对于当前位置的（x,y）位置
* elem.scrollIntoView(top) 
  * top:布尔值
  * top=true 页面滚动，使elem出现在窗口顶部，元素的上边缘与窗口底部对齐
  * top=false 页面滚动，使elem出现在窗口底部，元素的底部边缘将于窗口底部对齐

### 禁止滚动

* document.body.style.overflow = "hidden"将页面冻结


## 坐标

坐标系的处理方式

1. 相对于窗口： 类似于 position:fixed; 

  * 使用clientX,clientY表示

2. 相对于文档： 类似于position:absolute;

  * 使用 pageX,pageY表示

### 窗口坐标

#### 元素坐标:getBoundingClientRect

elem.getBoundingClientRect()返回最小矩形的窗口坐标，该矩形将elem作为内建DOMRect类的对象
DOMRect():

 * x/y ---矩形原点相对于窗口的X/Y坐标；
 * width/height --矩形的width/height 
 * top/bottom - -边缘的Y坐标
 * left/right -- 左/右矩形边缘的X坐标
 * left = x
 * top = y
 * right = x + width
 * bottom = y + height
   ps：
 * ie不支持 (polify)
 * right/bottom 和css position 属性不一样

####   elementFromPoint(x,y)

* 返回在窗口坐标（x,y)处嵌套最多的元素
* 会因滚动位置而有所不同
* 在窗口之外的坐标，elementFromPoint返回null
* 只对可见区域内的坐标起作用

### 文档坐标

文档相对坐标从文档的左上角开始计算，而不是窗口

* pageY = clientY + 文档的垂直滚动出来的部分的高度
* pageX = clientX + 文档水平滚动出来的部分的宽度

### 总结： 

1. 相对于窗口的坐标： elem.getBoundingClientRect() ---适合和fixed一起使用
2. 相对于文档的坐标： elem.getBoundingClientRect() + 当前页面滚动的距离（pageXOffset） ---适合和absolute一起使用

## window

window.open('https://...')

### 阻止弹窗：

**如果弹窗是在用户触发的事件处理程序（如 onclick）之外调用的，大多数浏览器都会阻止此类弹窗。**

### 语法

window.open(url,name,params)

* url: 新窗口中加载的URL
* name：新窗口的名字
* params： 新窗口的配置字符串

### 关闭弹窗

* window.close()
* 检查一个窗口是否被关闭： window.close ，为true表示关闭
* close可以用于任何window，但如果window不是通过window.open（）创建的， 浏览器会忽略window.close()

## 跨窗口通信

同源策略： 保护用户免遭信息盗窃

### “同源”策略规定：

* 如果我们有对另外一个窗口（例如，一个使用 window.open 创建的弹窗，或者一个窗口中的 iframe）的引用，并且该窗口是同源的，那么我们就具有对该窗口的全部访问权限。
* 否则，如果该窗口不是同源的，那么我们就无法访问该窗口中的内容：变量，文档，任何东西。唯一的例外是 location：我们可以修改它（进而重定向用户）。但是我们无法读取 location（因此，我们无法看到用户当前所处的位置，也就不会泄漏任何信息）。

### iframe标签

承载了一个单独的嵌入的窗口，它具有自己的document和window

* iframe.contentWindow  来获取 < iframe> 中的 window。
* iframe.contentDocument 来获取 < iframe> 中的 document，是
  iframe.contentWindow.document 的简写形式。
  **iframe标签必须同源。不同源会拒绝访问**
* 加载iframe事件
  iframe.contentWindow.onload === iframe.onload 当嵌入的窗口的所有资源都完全加载完毕时触发。
   无法使用iframe.contentWindow.onload访问不同源的iframe

### 子域名上的window ：document.domain

仅适用于窗口的二级域相同时可以使用
document.domain = 'xxx'

**不能在iframe未加载完前对文档进行处理，那是错误的文档&**

### 页面集合iframe window.frames

* 通过索引： window.frames[0] 获取文档中第一个iframe的window对象
* 同名称 ： window.frames.iframeName 获取name="iframeName" 的iframe的window对象

#### 一个 iframe 内可能嵌套了其他的 iframe。相应的 window 对象会形成一个层次结构（hierarchy）。

可以通过以下方式获取：
*window.frames —— “子”窗口的集合（用于嵌套的 iframe）。

* window.parent —— 对“父”（外部）窗口的引用。
* window.top —— 对最顶级父窗口的引用。

### sandbox iframe特性

允许在iframe中禁止某些行为 ，它会被强制处于“非同源”状态

* 空的 sandbox会施加最严格的限制

### 跨窗口通信

postMessage 接口允许窗口之间相互通信，无论他们来自什么源--是解决同源策略的方式之一

#### postMessage 

发消息：win.postMessage(data, targetOrigin)
data： 要发送的数据
targetOrigin : 目标窗口的源，只有来自给定的源的窗口才能获得该信息
              * 表示不做同源检查

#### onmessage

接收消息： 当postMessage被调用时触发，并且targettOrigin检查成果了

* data 从postmessage接受到的信息
* origin 发送方的源
* source 对对方窗口的应用 
* 使用 addEventListener 来在目标窗口中设置 message 事件的处理程序。

## 点击劫持攻击

点击劫持攻击 允许恶意页面以用户的名义点击受害网站

### 原理：

1. 访问者被恶意页面吸引。怎样吸引的不重要。
2. 页面上有一个看起来无害的链接（例如：“变得富有”或者“点我，超好玩！”）。
3. 恶意页面在该链接上方放置了一个透明的 < iframe >，其 src 来自于 facebook.com，这使得“点赞”按钮恰好位于该链接上面。这通常是通过 z-ind ex  实现的。
4. 用户尝试点击该链接时，实际上点击的是“点赞”按钮。

### 防御：

#### 传统防御：

禁止在frame页面中打开JavaScript代码

* X-Frame-Options 可以允许或禁止在frame中显示页面
  * DENY
    始终禁止在 frame 中显示此页面。
  * SAMEORIGIN
    允许在和父文档同源的 frame 中显示此页面。
  * ALLOW-FROM domain
    允许在来自给定域的父文档的 frame 中显示此页面。
  * X-Frame-Options 有一个副作用。其他的网站即使有充分的理由也无法在 frame 中显示我们的页面。

#### 总结：

*  建议在那些不希望被在 frame 中查看的页面上（或整个网站上）使用 X-Frame-Options: SAMEORIGIN。
*  如果我们希望允许在 frame 中显示我们的页面，那我们使用一个 < div > 对整个页面进行遮盖，这样也是安全的。