module.exports = {
  title: '晓川个人笔记',
  description: '学习，复习 ，自用',
  logo: '/mangguo.png',
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/public/asstes'
      }
    }
  },
  themeConfig: {
    nav: [ 
      {
        text: 'vue',
        ariaLabel: 'vue Menu',
        items: [
          { text: 'vue2', link: '/vue/vue2/' },
          { text: 'vue3', link: '/vue/vue3/' }
        ] 
      },
      {
        text: 'javascript',
        ariaLabel: 'javascript Menu',
        items: [
          { text: 'js', link: '/javascript/js/' },
          { text: 'dom', link: '/javascript/dom/' },
          { text: '事件', link: '/javascript/event/' }
        ] 
      },
      {
        text: 'css',
        ariaLabel: 'html css Menu',
        items: [
          { text: 'css', link: '/css/css/' },
          { text: 'html', link: '/css/html/' },
          { text: '', link: '/javascript/event/' }
        ] 
      },
      {
        text: '杂项',
        ariaLabel: ' other Menu',
        items: [
          { text: 'webpack', link: '/other/webpack/' },
          { text: '网络浏览器', link: '/other/web/' },
          { text: '性能优化', link: '/other/optimization/' }
        ] 
      },
    ],
    sidebar: [
      {
       title: 'JavaScript', // 侧边栏名称
       collapsable: true, // 可折叠
       children: [
       '/', // 你的md文件地址
       ]
      }
      
    ]
  },


}