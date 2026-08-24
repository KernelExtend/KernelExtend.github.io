import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "KernelExtend",
  description: "KernelExtend 项目文档",
  base: "/",
  theme: "./theme/index.js",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/guide/start" }
    ],
    sidebar: [
      {
        text: "使用指南",
        items: [
          { text: "快速开始", link: "/guide/start" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/KernelExtend" }
    ],
    footer: {
      message: "Released under the Apache-2.0 License.",
      copyright: "Copyright © 2026 KernelExtend"
    }
  }
})
