---
# 为当前页面添加额外的类名
pageClass: custom-page-class

# 是否在当前页面展示导航栏
navbar: true



# 以下配置只会在首页中生效。
# 设定该页面是首页还是普通页面
home: true
# 首页图片的 URL
# heroImage: https://vuejs.org/images/logo.png
heroImage: '/favicon.ico'
# 在夜间模式中使用的首页图片的 URL
heroImageDark: 'https://t7.baidu.com/it/u=3065092861,1536340632&fm=193&f=GIF'
# 首页图片的 alt 属性
heroAlt: '首页logo'
# 首页图片 <img> 标签的 height 属性
heroHeight: 100
# 首页的大标题  如果不设置，则默认使用站点 title  设置为 null 来禁用首页大标题
heroText: "Personal Blog"
# 首页的标语  如果不设置，则默认使用站点 description  设置为 null 来禁用首页标语
tagline: 'GuangBo'
# 配置首页按钮
actions:
  - text: 快速上手
    link: /zh/guide/getting-started.html
    type: primary
  - text: 项目简介
    link: /guide/
    type: secondary
# 配置首页特性列表
features: 
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue 驱动
    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
footer: 'copyright@2023 Design By SS<br> <a href="javascript:;">网监局备案号:苏ICP备5257233</a>'
footerHtml: true




# 以下配置只在普通页面中生效
contributorsText: 'SS'
openInNewWindow : '在新页面中打开'
sidebarDepth: 4
---
# Test Page

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

![VuePress Logo](/favicon.ico)

## 2

### 3

#### 4

##### 5

###### 6

- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash:no-line-numbers
pnpm install
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" >

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
<CodeGroup>
  <CodeGroupItem title="PNPM" active>

```bash:no-line-numbers
pnpm install
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" >

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码

```ts
console.log('你好，VuePress！')
```

:::

:::: code-group
::: code-group-item FOO

```ts
const foo = 'foo'
```

:::
::: code-group-item BAR

```ts
const bar = 'bar'
```

:::
::::
