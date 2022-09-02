(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{438:function(a,t,e){"use strict";e.r(t);var s=e(65),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"plugins和loader有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins和loader有什么区别"}},[a._v("#")]),a._v(" plugins和loader有什么区别")]),a._v(" "),e("p",[a._v("loader是解析规则， webpack是解析的js，所以loader里面需要配置一些规则（rules）")]),a._v(" "),e("p",[a._v("plugins是插件，是用来扩展webpack的功能的，比如压缩代码，提取公共组件")]),a._v(" "),e("h2",{attrs:{id:"输出文件名的hash、chunkhash和contenthash有什么区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输出文件名的hash、chunkhash和contenthash有什么区别"}},[a._v("#")]),a._v(" 输出文件名的hash、chunkhash和contenthash有什么区别？")]),a._v(" "),e("p",[a._v("hash： 只要又该一个文件，整个项目的文件命名都会被修改，不能进行缓存")]),a._v(" "),e("p",[a._v("chunkhash：根据入口文件命名，单独打包公共库和程序入口文件，只要不变动公共库的文件就可以保证hash值不会受到影响。线上的时候只要文件内容没有更改就不会重复构建")]),a._v(" "),e("p",[a._v("contenthash：根据内容生成命名，进行缓存")]),a._v(" "),e("h2",{attrs:{id:"polifill"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#polifill"}},[a._v("#")]),a._v(" polifill")]),a._v(" "),e("p",[a._v("中文翻译是腻子，实际上就是针对各个浏览器的js差异做出抹平处理，比如说html5的localstorage和sessionstorage，不同浏览器不同版本支持情况不一样，这个时候可以使用polifill把这些差异抹平")]),a._v(" "),e("h2",{attrs:{id:"什么是treeshaking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是treeshaking"}},[a._v("#")]),a._v(" 什么是treeshaking")]),a._v(" "),e("p",[a._v("树摇 删除多余冗余的代码")]),a._v(" "),e("h2",{attrs:{id:"webpack-externals是做什么的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-externals是做什么的"}},[a._v("#")]),a._v(" webpack  externals是做什么的")]),a._v(" "),e("p",[a._v("不想把某个东西打包出来，可以使用externals。转为cdn 引入")]),a._v(" "),e("p",[a._v("功能：压缩工程大小。 比如百度地图和echars图标我们可以使用此方式配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('externals: {\n       mathTools: "tools"\n     },\n')])])]),e("h2",{attrs:{id:"babel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[a._v("#")]),a._v(" babel")]),a._v(" "),e("p",[a._v("将es6语法转为es5：先将js代码转为AST语法树，在根据语法树，生成es5代码")]),a._v(" "),e("h2",{attrs:{id:"vite和webpack的对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite和webpack的对比"}},[a._v("#")]),a._v(" vite和webpack的对比")]),a._v(" "),e("h3",{attrs:{id:"webpack打包过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包过程"}},[a._v("#")]),a._v(" webpack打包过程：")]),a._v(" "),e("p",[a._v("1.识别入口文件")]),a._v(" "),e("p",[a._v("2.通过逐层识别模块依赖")]),a._v(" "),e("p",[a._v("3.分析代码，转换代码。编译代码，输出代码")]),a._v(" "),e("p",[a._v("4.最终形成打包后的代码")]),a._v(" "),e("h3",{attrs:{id:"webpack打包原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包原理"}},[a._v("#")]),a._v(" webpack打包原理：")]),a._v(" "),e("ol",[e("li",[a._v("逐层递归识别依赖，构建依赖图谱")]),a._v(" "),e("li",[a._v("将代码转换为AST树抽象语法树")]),a._v(" "),e("li",[a._v("在AST阶段中去处理代码")]),a._v(" "),e("li",[a._v("吧AST抽象语法树变成浏览器可以识别的代码")])]),a._v(" "),e("h3",{attrs:{id:"vite原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite原理"}},[a._v("#")]),a._v(" vite原理：")]),a._v(" "),e("ol",[e("li",[a._v("当声明一个script标签类型为module时")]),a._v(" "),e("li",[a._v("浏览器会像服务器发起一个get请求")]),a._v(" "),e("li",[a._v("浏览器请求到了main。js文件，检测到内部含有import引入的包，又会对其内部的import应用发起HTTP请求获取模块的内容文件")])]),a._v(" "),e("h3",{attrs:{id:"vite的主要功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite的主要功能"}},[a._v("#")]),a._v(" vite的主要功能：")]),a._v(" "),e("p",[a._v("劫持浏览器的请求，并在后端进行相应的处理将项目中使用的文件通过简单的分解和整合，然后返回给浏览器，vite整个过程并没有对文件进行打包编译，所以运行速度比webpack编译速度要快很多")]),a._v(" "),e("h3",{attrs:{id:"webpack缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack缺点"}},[a._v("#")]),a._v(" webpack缺点：")]),a._v(" "),e("p",[a._v("1.冷启动开发服务器时，webpack是在提供服务前急切的去抓取和构建整个应用")]),a._v(" "),e("p",[a._v("vite改进：")]),a._v(" "),e("ul",[e("li",[a._v("将应用的模块分为‘’依赖‘’和‘’源码‘’两类。改进了开发服务器启动时间")]),a._v(" "),e("li",[a._v("依赖会被拆分到大量小模块中")]),a._v(" "),e("li",[a._v("会使用esbuild预构建依赖，esbuild使用GO编写，比以js编写的打包器与构建依赖块10-100倍")]),a._v(" "),e("li",[a._v("以原生ESM方式服务源码，实际上是浏览器接管打包程序的部分工作，vite只需要在浏览器请求源码时，进行转换并按需提供源码。")])]),a._v(" "),e("p",[a._v("2.使用node.js去实现")]),a._v(" "),e("p",[a._v("vite使用的是esbuild预构建依赖， 使用go语言。")]),a._v(" "),e("p",[a._v("3.热更新效率低下")]),a._v(" "),e("p",[a._v("打包器启动后，编辑文件即重新构建文件本身，重构整个包。，及时使用HMR更新速度也会随着应用规模的增长而显著下降")]),a._v(" "),e("p",[a._v("vite改进：")]),a._v(" "),e("ul",[e("li",[a._v("vite中的HRM是原生ESM上去执行的， 当编辑一个文件，vite只需要精准的使已编辑的模块与其最近的HMR边界之间的链失效。使HMR更新始终快速，无论应用大小")]),a._v(" "),e("li",[a._v("同时利用HTTP头来加速页面重新加载， 源码模块请求会根据 304进行写上缓存。 依赖模块则会通过cache-contorl：max-age= XXX强制缓存， 因此一旦被缓存它们将不需再次请求")])]),a._v(" "),e("h3",{attrs:{id:"vite缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite缺点"}},[a._v("#")]),a._v(" vite缺点")]),a._v(" "),e("p",[a._v("生态，没有webpack那么多plugins和loader")])])}),[],!1,null,null,null);t.default=v.exports}}]);