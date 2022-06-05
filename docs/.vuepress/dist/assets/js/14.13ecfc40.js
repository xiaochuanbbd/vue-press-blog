(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{439:function(v,_,l){"use strict";l.r(_);var t=l(65),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"项目优化"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#项目优化"}},[v._v("#")]),v._v(" 项目优化")]),v._v(" "),l("h3",{attrs:{id:"webpack打包优化"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包优化"}},[v._v("#")]),v._v(" webpack打包优化")]),v._v(" "),l("p",[v._v("优化打包文件")]),v._v(" "),l("p",[v._v("目标：兼容性，减少打包文件，懒加载，预加载，首屏加载优化")]),v._v(" "),l("p",[v._v("1.兼容低版本浏览器：")]),v._v(" "),l("ul",[l("li",[v._v("babel:es6==>es5")]),v._v(" "),l("li",[v._v("postcss : 兼容各大浏览器的css。 自动获取浏览器的流行度和能够支持的属性，自动添加前缀。")])]),v._v(" "),l("ol",{attrs:{start:"2"}},[l("li",[v._v("拆分打包和压缩")])]),v._v(" "),l("ul",[l("li",[v._v("单独打包第三方模块js.。压缩js")]),v._v(" "),l("li",[v._v("抽取CSS打包")])]),v._v(" "),l("ol",{attrs:{start:"3"}},[l("li",[l("p",[v._v("异步，懒加载")]),v._v(" "),l("p",[v._v("import（）动态引入模块")])]),v._v(" "),l("li",[l("p",[v._v("预加载：提高用户体验")])]),v._v(" "),l("li",[l("p",[v._v("利用浏览器缓存：")])]),v._v(" "),l("li",[l("p",[v._v("tree Shaking 删除冗余代码")])]),v._v(" "),l("li",[l("p",[v._v("Scope Hoisting 作用域提升")])]),v._v(" "),l("li",[l("p",[v._v("gzip压缩")])]),v._v(" "),l("li",[l("p",[v._v("打包文件分析")])]),v._v(" "),l("li",[l("p",[v._v("loader增加include 匹配特定条件")])]),v._v(" "),l("li",[l("p",[v._v("happypack 开启多线程loader")])]),v._v(" "),l("li",[l("p",[v._v("HMR热模块替换，当一个模块发生变化时，只打包变动的模块")])])]),v._v(" "),l("h3",{attrs:{id:"html性能优化"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#html性能优化"}},[v._v("#")]),v._v(" HTML性能优化")]),v._v(" "),l("ul",[l("li",[v._v("script 标签移到html文件的末尾，js会阻塞后面的页面展示")]),v._v(" "),l("li",[v._v("类名关键字连接符号用中划线不要用下划线")]),v._v(" "),l("li",[v._v("清除空格")]),v._v(" "),l("li",[v._v("css js 分离")]),v._v(" "),l("li",[v._v("减少注释")]),v._v(" "),l("li",[v._v("减少不必要的嵌套，尽量扁平化")])]),v._v(" "),l("h3",{attrs:{id:"css性能优化"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#css性能优化"}},[v._v("#")]),v._v(" css性能优化")]),v._v(" "),l("ul",[l("li",[v._v("减少重排重绘的次数，重排比重绘更废内存")]),v._v(" "),l("li",[v._v("使用classname操作样式，不要用style")]),v._v(" "),l("li",[v._v("动画开启独立的图层。用定位 ，脱靶处理")])]),v._v(" "),l("h3",{attrs:{id:"js性能优化"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#js性能优化"}},[v._v("#")]),v._v(" js性能优化")]),v._v(" "),l("ul",[l("li",[v._v("减少对dom的操作，避免重绘和重排")]),v._v(" "),l("li",[v._v("封装复用函数")]),v._v(" "),l("li",[v._v("循环语句中避免定义变量")]),v._v(" "),l("li",[v._v("闭包记得销毁，或者慎用闭包")]),v._v(" "),l("li",[v._v("函数节流和函数防抖")])]),v._v(" "),l("h3",{attrs:{id:"vue性能优化"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#vue性能优化"}},[v._v("#")]),v._v(" vue性能优化")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("路由懒加载 < keep-alive >")])]),v._v(" "),l("li",[l("p",[v._v("封装复用组件，函数组件，使用mixin混合减少代码使用量")])]),v._v(" "),l("li",[l("p",[v._v("v-for使用唯一值，而不使用id")])]),v._v(" "),l("li",[l("p",[v._v("对大数据只是进行展示的数据，使用object.freeze冻结数组，使其不会对data进行响应式处理")])]),v._v(" "),l("li",[l("p",[v._v("ui组件库按需加载。")])]),v._v(" "),l("li",[l("p",[v._v("使用函数式组件，好处是函数式组件可以抽离复杂组件，并且在加载的时候，不会对vuecomponent进行实例化的过程，只是加载代码，提高运行速度")])]),v._v(" "),l("li",[l("p",[v._v("使用ref操作dom，而不是使用getelementbyclass之类的语法来操作dom")])]),v._v(" "),l("li",[l("p",[v._v("在组件中使用了定时器需要在befordestory中进行销毁")])]),v._v(" "),l("li",[l("p",[v._v("UI库按需加载（打包）解决方案：下载babel插件包：bebel-plugin-component")])]),v._v(" "),l("li",[l("p",[v._v("图片懒加载")]),v._v(" "),l("p",[v._v("vue项目中使用：vue-lazyload")])]),v._v(" "),l("li",[l("p",[v._v("路由组件懒加载")]),v._v(" "),l("p",[v._v("VUE开发中使用路由跳转，通常会注册多个路由，对应的有多个路由组件")]),v._v(" "),l("p",[v._v("这些文件在打包之后会变得非常大，如果没有路由懒加载的话，一上来就加载所有页面的文件。")]),v._v(" "),l("p",[v._v("如果他是加载所有页面的文件内容，会导致首屏加载显示过慢，甚至白屏，导致用户体验差")]),v._v(" "),l("p",[v._v("解决方案：将路由组件采用Import函数的方式进行引用")]),v._v(" "),l("p",[v._v("白屏也可以使用webpack配置代码按需加载，代码分割，懒加载")])])]),v._v(" "),l("p",[v._v("答：性能优化分为几个方面：webpack，vue，css,js,html方面，平常主要的是使用webpack配置一些响应的插件和loader，比如打包。。。")]),v._v(" "),l("p",[v._v("写vue项目的时候是使用一些方法。。。还有平常在写css，js，html中会注意xxx")])])}),[],!1,null,null,null);_.default=s.exports}}]);