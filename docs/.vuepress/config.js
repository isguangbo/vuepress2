// 配置文件
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'

export default defineUserConfig({
  // base: '/bar' // 部署站点的基础路径
  lang: 'zh-CN', // 语言
  title: 'GuangBo', // 它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示
  description: 'GuangBo blog', //它将会在最终渲染出的 HTML 中作为 <meta name="description" /> 标签的 content 属性。它会被每个页面的 Frontmatter 中的 description 字段覆盖
  head: [['link', { rel: 'ico', href: 'favicon.ico' }]],
  plugins: [
    // 搜索插件
    searchPlugin({
      hotKeys: ['ctrl', 'k'] //聚焦热键为ctrl+k
    }),
    // 复制代码插件
    copyCodePlugin({
      // your options
      showInMobile: true,
      duration: 1000,
      copy: '复制此段代码',
      pure: true
    })
  ],
  theme: defaultTheme({
    repo: 'https://github.com/isguangbo/vuepress2', //github仓库地址
    lastUpdatedText: '最后更新时间',
    contributorsText: '作者',
    // 默认主题配置
    // colorModeSwitch: true,
    // colorMode: 'dark',
    // 导航栏
    // navbar: [
    //   {
    //     text: '首页',
    //     link: '/'
    //   },
    //   // NavbarItem
    //   {
    //     text: 'Foo',
    //     link: '/foo/'
    //   },
    //   // NavbarGroup
    //   {
    //     text: 'Group',
    //     children: [
    //       {
    //         text: '子导航',
    //         link: '/son/'
    //       },
    //       '/group/bar.md'
    //     ]
    //   },
    //   // 字符串 - 页面文件路径
    //   '/bar/README.md'
    // ]
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: '前端',
        children: [
          {
            text: '书籍',
            children: [
              {
                text: 'ES6',
                link: '/books/ES6.md',
                activeMatch: '/books/'
              },
              {
                text: '面试宝典',
                link: '/interview/questions.md',
                activeMatch: '/interview/'
              }
            ]
          },
          {
            text: 'HTML',
            children: [
              {
                text: 'HTML基础',
                link: '/'
              }
            ]
          }
        ]
      },
      // 控制元素何时被激活
      {
        text: '前端',
        children: [
          {
            text: '书籍',
            link: '/books/',
            // 该元素将一直处于激活状态
            activeMatch: '/books/'
          },
          {
            text: 'Active on /foo/',
            link: '/not-foo/',
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: '^/foo/'
          }
        ]
      }
    ],
    logo: 'favicon.ico',
    // dark主题下logo
    // logoDark: 'https://img2.baidu.com/it/u=812852474,3660807088&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=1'
    // sidebar: [
    //   // SidebarItem
    //   {
    //     text: 'Foo',
    //     link: '/foo/',
    //     children: [
    //       // SidebarItem
    //       {
    //         text: 'github',
    //         link: 'https://github.com',
    //         children: []
    //       },
    //       // 字符串 - 页面文件路径
    //       '/foo/bar.md'
    //     ]
    //   },
    //   // 字符串 - 页面文件路径
    //   '/bar/README.md'
    // ]
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    // sidebar: {
    //   '/': [
    //     {
    //       text: 'Guide',
    //       children: ['/guide/README.md', '/guide/getting-started.md']
    //     }
    //   ],
    //   '/reference/': [
    //     {
    //       text: 'Reference',
    //       children: ['/reference/cli.md', '/reference/config.md']
    //     }
    //   ]
    // }
    // 可折叠的侧边栏
    // sidebar: {
    //   '/': [
    //     {
    //       text: 'VuePress Reference',
    //       collapsible: true,
    //       children: ['/reference/cli.md', '/reference/config.md']
    //     },
    //     {
    //       text: 'Bundlers Reference',
    //       collapsible: true,
    //       children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md']
    //     }
    //   ]
    // }
    // contributorsText: 'Contributors'
    notFound: ['页面不见了~'],
    backToHome: '回到主页'
  })
})
