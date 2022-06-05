module.exports = {
  base:'/vue-press-blog/',
  title: '晓川个人笔记',
  description: '学习，复习 ，自用',
  logo: '/mangguo.png',
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/vuepress/public/asstes'
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
          // { text: 'vue3', link: '/vue/vue3/' }
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
          // { text: 'html', link: '/css/html/' },
          // { text: '', link: '/javascript/event/' }
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
    sidebar: 'auto',
    lastUpdated: '最后更新时间', // string | boolean
      // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
      repo: 'https://github.com/xiaochuanbbd/myBlog-vue-press',
      // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
      // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
      repoLabel: '查看源码',
  
      // 以下为可选的编辑链接选项
  
      // 假如你的文档仓库和项目本身不在一个仓库：
      // docsRepo: 'vuejs/vuepress',
      // // 假如文档不是放在仓库的根目录下：
      // docsDir: 'docs',
      // 假如文档放在一个特定的分支下：
      docsBranch: 'master',
      // 默认是 false, 设置为 true 来启用
      editLinks: true,
      // 默认为 "Edit this page"
      editLinkText: '帮助我们改善此页面！',
      smoothScroll: true
  },


}