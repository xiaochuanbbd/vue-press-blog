# vue面试题
##  v-show  v-if
 v-show是使用css中的display：none， v-if是对 Dom元素创建 ，元素频繁更改使用v-show，一次渲染使用dom
## vif 优先级
Vif 渲染的优先级高于 v for 不要一起连用，循环出来再去看vif，再隐藏 vif建议使用在父元素上面 
## vfor 循环对象
v-for 可以使用对象进行循环 三个参数（value，key,index）
## keepalive
使用keep-alive可以在activated里执行原本在mounted的逻辑
## 事件target
事件对象@click=xxx（e）e.target为触发时间的元素 
## 组件通信方法
* 父子组件：props/$emit
* 兄弟组件： eventBus 定义在vue的实例上，事件总线的方式 使用new Vue()实例上的$emits和$on 方法,这个需要在beforeDestory()钩子里面进行解绑

## 异步组件
修改import引入为函数import引入 ：（）=》｛｝
## 组件缓存
keepalive 组件内容不多使用v-show也可以实现效果
## 插槽的使用
理解插槽：在子组件中站好了位置，使用该子组件是可以传递任意的内容给他，自动填坑，替换放置slot的位置
插槽的原理：slot本质是返回vnode函数
* 默认插槽： 子组件内定义一个``` <slot></slot>```标签，父组件传入内容
* 具名插槽：子组件内定义一个<slot name="xxx"></slot>标签， 父组件通过 <template
solt="xxx"></template>来填入东西。
* 作用域插槽：子组件在组件内定义数据 父组件在子组件标签名上获取数据，使用插槽 内的数据 
* 作用域+具名插槽混合使用： 父组件 在template标签内将default替换为name属性绑定的
## MVVM model-view- viewModel
即将数据模型与数据表现层通过数据驱动进行分离，只需要关心数据的开发，不需要考虑页面的展示
* M是代表 model 模型 、操作数据和定义数据的模型
* V代表的是页面展示
* vm： 代表的是数据和页面之间的桥梁，通过双向数据绑定将数据与页面绑定起来，从而达到数据更新即更新页面的功
能。 这里的更新是同步操作的，无需人工干涉

## v-for中对key的理解
 key是为了更好的支持 diff算法，通过唯一标识对更新和删除的元素进行对比，更高效的操作虚拟dom
 ##  vue原理
 ### vue2
* 通过数据劫持 结合发布者和订阅者模式，使用definedpro perty来劫持各个属性的getter和setter ，在数据更新的时候
发布消息给各个订阅者，出发相应的回调函数
* 缺点： 需要递归对data中的复杂对象进行劫持， 删除和增加元素无法响应式，数组改变长度和通过下标修改也做不到。
### Vue3
proxy vue3
采用新的proxy API es6里的方法
proxy可以劫持整个对象
* reflect 劫持
1.多层代理，通过get方法来判断
好处：不会一上来就递归data数据，而是当获取这个属性时候的时候再去判断是不是对象 是对象里的属性在递归进行reflect劫持，
* weakmap（）
生成弱引用，解决proxy重复代理
缺点： 兼容性不好IE11不兼容
* Reflect ： 类似于Object对象，其中包括了object的静态函数，但reflect并不是一个函数对象，所以他是一个不可构造的
## diff算法原理
* 作用： 修改dom的一小部分，不会引起dom树的重绘和重排
* 原理： diff算法将某个节点数据变化后生成新的vnode，将新的vnode与原来的节点使用patch函数进行对比，比较新旧
节点，并替换新旧节点，一边比较一边给真实dom打补丁进行替换
## vuex相关
* vuex是一个用来集中管理数据的状态管理仓库
### 其中仓库分为三个区域：
* status：用来存放数据处 响应式数据
* Mutations:存放同步代码，并且将数据传给status修改status的地方 
 vuex里使用commit触发，组件内使用this.$store.commit（’xxx’）/…mapMutation(‘xxx’,参数)
* actions：用来存放异步代码，并且调用异步方法的地方
 触发mutation函数，在组件内触发可以使用this.$store.dispatch（’方法名’）/ …mapAction(‘xxx’,参
数)
 
* getters：需要从store里的status里派生一些状态，比如对列表进行过滤或者计数等，可以理解为status的计算属性
 组件内取出数据：…mapGetters([‘xxx’,’xxx’])
* Namespace:分模块管理
给模块添加namespace：true的方式使其成为带命名空间的模块
在根store文件内引入模块并且挂载 
组件内读取
```js
state：$store.state.userInfo.userName
mutation：this.$store.commit("userInfo/setUserInfo",userInfo)
action:dispatch('moduleB/moduleBAction',{},{root:true});
Getters:…mapGetters([‘模块名/getter名’])
require.context( )
webpackAPI 自动化倒入模块

```
## computed和watch的区别
computed是计算属性，是根据已有的数据去进行一些计算得出一个新的数据，不支持异步和缓存，如果这个属性的属性值是一个函数
watch是属于监视现有的数据，监视他的变化 immediate：true. 是否立即触发，deep:true是否深度监视,监听对象内部
## 为什么data是一个函数
data一般是出现在组件当中， 组件是可以被复用的，js里的对象是引用关系， 如果data是一个对象，那么组件间的data
对象会相互污染，
如果是一个函数的话，会起到隔离变量的作用
##  v-show是重排吗？
是，重排的定义是渲染树中的节点信息发生了大小/边距等改变，要重新计算节点css的大小和位置
因为vshow是使用的display进行元素的控制 ，会改变节点的大小和渲染树的布局 导致重排
## 为什么·不是用index或者随机数来进行key
在插入或者删除的时候，key会导致绑定的index变化从而需要重新渲染，效率低。会导致性能浪费，使用index渲染key
可能会出错
## vue单项数据流
### Props:
数据从父组件传递给子组件，数据只能在父组件内进行修改，子组件无法进行修改。
如何操作数据：
* 使用$emit去触发父组件中的函数对数据进行修改。
* 子组件的data新定一个值获取props，用这个去改变；
* 使用.sync修饰符
 
## 父子组件的生命周期执行顺序
* 父 beforeCreate
* 父 created
* 子 beforeCreate
* 子 created
* 子 mounted
* 父 mounted
* 父 beforeDestroy
* 子 beforeDestroy
* 子 destroyed
* 父 destroyed
### 注意
* create创建实例对象是先父后子
* beforeDestroy是先父后子
* 父组件里的更新触及到子组件的更新是先父后子
* mounted挂载dom是先子后父
* destroy组件消亡是先子后父

## vue事件绑定原理
原生时间是通过addEventListener 
组件上的事件是通过$on修饰符， 如果想添加原生时间需要➕.native。将其绑定在子元素html元素上，变成原生事件
## vue-router钩子函数，执行顺序
### 全局守卫
 * beforeEach 每次路由进入前执行的函数
 * afterEach 每次路由进入之后执行的函数
 * beforeResolve 全局解析守卫
### 路由守卫，
 * beforeEnter 指定路由进入前的函数
 * beforeLeave 指定路由离开前的函数
### 组件守卫
 * beforeRouterEnter 组件内路由进入前的函数
 * beforeRouterLeave 组件内路由离开前的函数
 * beforeRouterUpdate 组件内路由更新的函数
### 当点击切换路由时
beforeRouterLeave=>beforeEach=>beforeEnter=>beforeRouteEnter=>beforeResolve=>afterEach=>beforeRouteEnter
## vue函数式组件
* 开启方式：functional:true
* 不需要实例化，函数组件没有this，this死通过render函数的第二个参数context来代替的
* 没有生命周期。不能使用计算属性watch。 
* 不能同$emit暴露事件，调用时间只能通过context.listeners.click的方式调用外部传入的事件
### 函数式组件的优点
* 不需要实例化，无状态，没有生命周期，渲染性能要好于普通组件
* 结构比较简单，代码比较清晰
## vue性能优化
* 响应式数据不需要使用的只做为展示的，可以使用object.freeze（）进行冻结
* 合理使用v-if v-show。频繁切换用v-show 不频繁使用v-if
* v-for遍历少使用index，最好使用id值
* 大数据列表使用虚拟列表，虚拟表格
* 组件销毁后要把全局变量和实践销毁
* 图片懒加载，路由懒加载
* 第三方插件比如element-UI 按需引入
* 适当采用keepalive缓存组件
* 防抖节流用起来
* 服务端渲染ssr, 预渲染
## webpack层面优化：
* 对图片进行压缩
* 提取公共代码 commonsChunkPlugin
* 提取组件css
* 优化sourceMap
* 构建结果输出分析，利webpack-bundle-analyzer
* 打包优化
* 压缩代码
* treeshaking
* seo优化
* 预渲染
* 服务端渲染 SSR
* Happypack 多线程打包
* 抽离公共组件
* soureMap优化
* Vue 的SPA页面如何优化加载速度
* 减少入口文件体积
* 静态资源本地缓存
* 开启GZIP压缩
* 使用SSR.nuxt.js
## mixin混合使用场景和原理
### 作用：
分发vue组件中可服用的功能，提取相似代码
### 原理：
merOptions,类似于对象的继承，当组件初始化的时候会调用mergeOptions方法进行合并。当组件和混入对象含有相同名选项时，以恰当的方式进
#### mergeOptions方法：
步骤：
先递归处理mixin，合并parent中的key,调用mergeField方法进行合并，保存在变量options中，在遍历child，不上parent中没有的key，
调用mergefield方法进行合并，并保存变量在options中，最后将options返回
```js
export function mergeOptions (
parent: Object,
child: Object,
vm?: Component
): Object {
if (child.mixins) { // 判断有没有mixin 有的话递归进行合并
for (let i = 0, l = child.mixins.length; i < l; i++) {
parent = mergeOptions(parent, child.mixins[i], vm)
}
}
const options = {}
let key
for (key in parent) {
mergeField(key) // 先遍历parent的key
}
for (key in child) {
if (!hasOwn(parent, key)) { // 如果parent已经处理过某个key 就不处理了
mergeField(key) // 处理child中的key 也就parent中没有处理过的key
}
}
function mergeField (key) {
const strat = strats[key] || defaultStrat
options[key] = strat(parent[key], child[key], vm, key) // 根据不同类型的options调用strats中不同的方法进行合并
}
return options
}
```
## Vue.extend 作用及原理
使用Vue基础构造器，创建一个子类，参数是一个包涵组件选项的对象,该方法返回一个与Vue具有相同功能的构造函数
### 原理：
核心思路是新建一个VueCommponent构造函数，命名为sub,通过将VueCommponent的原型指向Vue的构造函数的原型方式继承Vue构造函数上所有
```js
Vue.extend()
Suber = this
VueCommponent.protoType = Object.create(Super.prototype);
```
### 与mixin的区别：
mixin是对vue options进行混入，所有的vue实例对象都会具备混入进来的配置行为
extend是产生一个继承自Vue类的子类，只会影响这个子类的实例对象，不会对vue类本身以及Vue类的实例对象产生影响
 
```js
简单创造一个子类
// 创建构造器。js文件
import Vue from 'vue'
var Profile = Vue.extend({
template: '<p v-on:click="workclick">{{firstName}} {{lastName}} aka {{alias}}111111</p>',
data: function () {
return {
firstName: 'Walter',
lastName: 'White',
alias: 'Heisenberg'
}
},
methods:{
workclick(){
alert('我执行了')
}
}
})
export default Profile
组件内应用：
import Profile from '@/components/Exetend’
mounted(){
new Profile().$mount('#mount-point')
}
```
## 双向数据绑定的原理 v-model
v-model本质是语法糖，v-model在内部为不同的输入元素使用不同的属性抛出不同的事件
input+textarea：value：data里的值， 触发事件： input = $event.target.value
Checkbox+radio 使用checked和change事件
select采用 prop和change事件
## keepalive
https://segmentfault.com/a/1190000011978825

缓存组件的功能。避免多次加载相应的组件，消耗性能，能够将不活动的组件，保存在内存中， 而不是直接销毁，是一个抽象组件，不会渲染到
### 两个生命周期：
* Activated :激活的时候调用
* Deactivated：停用时调用
### 提供两个属性：
* include：需要缓存的组件
* exclude：不需要缓存的组件
### 原理：
运用LRU原理
选择最近最久未使用的组件予以淘汰。
#### LRU算法：
最新数据插入数组末尾，命中缓存的数据也插入到数组末尾，当数组满了，删除头部的数据。

kee-alive的缓存，是基于VNode节点而不是直接储存dom结构，本质是将需要缓存的VNode缓存在this.catch中，在render的时候如果VNode的name符合在缓存条件（include和exclude）。则会从this.catch中取出之前的VNode实例进行渲染
缓存在creaeted钩子创建一个缓存容器。保存Vnode节点，在destoryed组件中进行销毁组件实例 ，watch对include和exclude进行监视，被修改的时候对cache进行修正。render对vnode进行节点的缓存

## vue.use 使用一个插件
https://www.jianshu.com/p/0b8b6f2e5a82
https://blog.csdn.net/ZYS10000/article/details/107246076/
使用时必须传入一个Objecthuo或者Fuction，如果是Object必须有install对象，如果是函数，那么这个函数会被当成是install方法。
当Vue.ues执行的时候，第一个参数是vue,其他参数是vue.use执行的其他参数
当使用Vue.use()的时候会默认执行install方法。
简单使用：
```js
import App from './App.vue'
const plugn = {
install(){
alert(123)
}
}
Vue.use(plugn)
```
## vue修饰符
.stop 阻止事件冒泡
Prevent 阻止事件默认行为
once 只触发一次
Self 只有触发自己的事件时才会执行
##  nextTick原理
理解：主要是思路是采用微任务优先的方式调用异步方法去执行nextTick包装的方法。
使用顺序：
* promise.then 
* mutationObserver 
* setImmediate setTimeout
mutationObserver：监听dom变化

## vue模版编译原理
简单：
* vue模版编译的原理就是将template转化为render函数的过程
阶段：https://segmentfault.com/a/1190000013763590
*  生成AST树 (解析器)（抽象语法树（AST） https://blog.csdn.net/huangpb123/article/details/84799198
优化 （优化器）
codegen（代码生成器）

1. 将模版字符串转换为element ASTs (解析器)
2. 递归对AST进行静态节点标记，主要用来做虚拟DOM的渲染优化（优化器）
静态节点主要是指那些不需要发生变化的dom节点，包括静态节点和静态根结点（里面的子元素都是静态节点）。比如纯文本，< p>我是静态节
静态节点标注好处：dom更新时可以被跳过，更新时不需要为其创建新节点
3. 使用element ASTs 生成render函数代码字符串 （代码生成器）
## vue指令的原理
1、在生成ast语法树的时候，遇到指令会给当前的元素添加directives属性；
2、通过 genDirectives 生成指令代码
3、在 patch 前将指令的钩子提取到 cbs 中，在 patch 过程中调用对应的钩子。
4、当执行指令对应钩子函数时，调用对应指令定义方法。

## vue.$set（）原理
Vue响应式原理两种情况修改vue不会触发视图的更新：
1. 新增一个对象内的响应式数据
2. 更改数组下标来修改数组的值
### Vue.set()原理：
响应式数据，会给对象和数组本身新增__ob__属性，代表的是Observer实例，当给对象新增不存在的属性时，$set（）首先会把新的属性进行响应式跟踪，然后后触发对象__ob__的dep收集到的watcher去更新，修改数组索引时我们调用数组本身的splice方法去更新数组
## vue-router 
模式前端路由存在的意义： 改变视图的同时不会向后端发出请求
### hash模式
原理： onhashchange事件，可以在window上监听这个事件
特点：
* 有#号
* 不会向服务端发起请求。改变hash不会重新加载页面

### history模式
h5新增的pushStatus ()和replaceStatus()方法
#### 刷新会 404 
因为刷新会重新请求服务器 ，后台需要配置重定向到index.HTML页面（后端或者Nginx中进行简单配置）

## 虚拟dom的优缺点缺点
 首次大量渲染dom时， 多了一层虚拟dom的计算，回避innerHTML插入慢
好处：
* 减少了dom操作，减少了重绘和回流
* 保证性能下限，虽然不是最佳的性能，但具备局部更新的能力，比直接操作dom性能高

## diff算法
当需要更新dom的时候，将需要更新的dom生成新的VNode，再将新的VNode和旧的VNode通过patch函数进行对比，更新并替换新旧VNode，并对真实dom打补丁操作
## key的作用
主要应用于虚拟dom中，vue通过对比新旧节点的key，来判断节点是否改变，用key可以提高渲染效率，更搞笑的操作虚拟dom
## 组件传递方式
### 父子：
* props
* $attrs $listenners
* $children $parent
* $refs
* slot-scope 父组件享受子组件的作用域
* .sync
### 祖孙：
* provide inject
### 兄弟
* eventBUS
* $emit 触发事件
* $on 绑定事件函数
* vuex

## v-html会造成什么问题
可能会造成xss（跨站脚本攻击，攻击者嵌入恶意脚本代码到正常用户会访问的页面中）攻击
v-html会替换掉子标签

## mvc mvvm 区别
* mvc思想：
一句话描述就是controller负责将数据用view显示出来。controller将model的数据赋值给了view
* mvvm:
 通过vm做了数据绑定，将模型转换为视图，将视图转换为模型（实现方式：dom事件监听）
* 区别： 
实现了view和model的自动同步，当model属性改变时，不用再手动操作dom元素来改变view的展示，而是改变数据之后对于的view会自动改变。

## vue的内置指令
* v-once: 定义他的元素或者组件只渲染一次，包括元素或组件的所有子节点，首次渲染后不再随数据的变化重新渲染，被视为静态内容


* v-cloak :保持在元素上直到关联实例结束编译，解决初始化慢导致页面闪动最佳实践
* v-bind： 动态更新html伤的元素属性
* v-on： 监听dom事件
* v-html：赋值变量给html 注意xss攻击
* v-text：更新元素的textContent
* v-model:ni
* v-if/v-else-if/v-else： 判断
* v-show：元素的显示隐藏 display
* v-for：循环指令
* v-pre： 跳过这个元素以及子元素的编译过程，以此来加快整个项目的编译速度

## 虚拟dom的优缺点：
为什么用虚拟dom: 在浏览器中操作dom是很昂贵的，频繁操作dom，会产生一定的性能问题，这就是虚拟dom的产生原因，vue2借助了snabbdom的实现，用一个js对象去描述dom
是对真实dom的一种抽象
优点：
*.保证性能的下线,比直接粗暴的操作dom性能要好得多
* 无需手动操作dom 框架会根据虚拟dom和数据双向绑定，帮助我们更新视图
* 跨平台。虚拟dom本质是JavaScript对象，虚拟dom可以更加方便的进行跨平台操作，例如服务端渲染等
缺点：
* 无法进行极致优化，
* 首次渲染，由于有多一层的diff算法，所以会比innerHTML插入要慢

## 数据响应式和双向数据绑定的区别
响应式原理：单向数据 数据流向视图，通过object。definePropety()
双向数据绑定：通过value和绑定的事件去修改value值来修改的

## SPA（单页面）的优缺点：
优点：
1. 加载快，用户感觉不到，交互体验好
2. 前后端分离 ，不需要请求服务器就可以刷新数据
3. 减轻服务器压力
缺点：
1.不利于seo优化
2.首屏加载慢
3.不适合大型开发项目

## 为什么单页面首频加载慢？
因为第一次要把所有的页面组件内容下载下来
解决方案：
1. 懒加载，通过脚手架配置
将每个文件打包成独立的文件， 首频加载的时候只加载首屏的文件， 点击其他页面再去加载其他页面的文件
2. 异步延迟加载
打包时，每个文件单独打包， 首屏加载时只加载第一个组件内容，后续组件异步加载（底层程序）
3. 静态资源本地缓存
4.图片资源 压缩
5.GZIP压缩
6. 使用ssr 客户端渲染 我们用的就是这个 nuxt.js
7.ui组件库按需加载
8.减少入口文件体积 treeshaking

## 路由懒加载的几种方式
1.vue异步组件：
```js
component:require([@/xxx/index],resolve)
```
2.路由懒加载 import（）函数
```js
componen
const Home = ()=>import(webpackChunkName:xxx,'@/component/index.js')
```

这里可以配置webpackchunkName 将文件打包到一个js文件
3.webpack提供的require.ensure()
```js

{
path:'/home',
name:'home',
component:r=>require.ensure([],()=>r(require('@/components/index')),'demo')
}
```

