import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'KernelEX',
  description: '专为 Android ROOT 环境打造的可视化脚本与原生程序执行工具',
  base: '/',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/ic_kernelex.png' }]
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'KernelEX',
      description: '专为 Android ROOT 环境打造的可视化脚本与原生程序执行工具',
      themeConfig: {
        nav: [
          { text: '快速开始', link: '/guide/start' },
          { text: '功能特性', link: '/guide/features' },
          { text: '常见问题', link: '/guide/faq' },
          {
            text: '🌐 语言切换',
            items: [
              { text: '简体中文 (当前)', link: '/' },
              { text: '繁體中文', link: '/zh-hant/' },
              { text: 'English', link: '/en/' },
              { text: '喵星語 🐾', link: '/meow/' }
            ]
          },
          {
            text: '相关链接',
            items: [
              { text: 'GitHub 仓库', link: 'https://github.com/KernelExtend/KernelEX' },
              { text: 'Release 下载', link: 'https://github.com/KernelExtend/KernelEX/releases' },
              { text: 'Telegram 讨论群', link: 'https://t.me/KernelEX' }
            ]
          }
        ],
        sidebar: [
          {
            text: '使用指南',
            items: [
              { text: '快速开始', link: '/guide/start' },
              { text: '核心功能', link: '/guide/features' },
              { text: '常见问题 (FAQ)', link: '/guide/faq' }
            ]
          }
        ],
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        outline: {
          label: '页面导航'
        },
        langMenuLabel: '多语言切换',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '深浅色模式'
      }
    },
    'zh-hant': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-hant/',
      title: 'KernelEX',
      description: '專為 Android ROOT 環境打造的可視化腳本與原生程式執行工具',
      themeConfig: {
        nav: [
          { text: '快速開始', link: '/zh-hant/guide/start' },
          { text: '功能特性', link: '/zh-hant/guide/features' },
          { text: '常見問題', link: '/zh-hant/guide/faq' },
          {
            text: '🌐 語言切換',
            items: [
              { text: '简体中文', link: '/' },
              { text: '繁體中文 (目前)', link: '/zh-hant/' },
              { text: 'English', link: '/en/' },
              { text: '喵星語 🐾', link: '/meow/' }
            ]
          },
          {
            text: '相關連結',
            items: [
              { text: 'GitHub 倉庫', link: 'https://github.com/KernelExtend/KernelEX' },
              { text: 'Release 下載', link: 'https://github.com/KernelExtend/KernelEX/releases' },
              { text: 'Telegram 討論群', link: 'https://t.me/KernelEX' }
            ]
          }
        ],
        sidebar: [
          {
            text: '使用指南',
            items: [
              { text: '快速開始', link: '/zh-hant/guide/start' },
              { text: '核心功能', link: '/zh-hant/guide/features' },
              { text: '常見問題 (FAQ)', link: '/zh-hant/guide/faq' }
            ]
          }
        ],
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        outline: {
          label: '頁面導航'
        },
        langMenuLabel: '多語言切換',
        returnToTopLabel: '返回頂部',
        sidebarMenuLabel: '選單',
        darkModeSwitchLabel: '深淺色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'KernelEX',
      description: 'Visual Execution & Management Tool for Scripts and ELF Binaries in Android ROOT Environments',
      themeConfig: {
        nav: [
          { text: 'Quick Start', link: '/en/guide/start' },
          { text: 'Features', link: '/en/guide/features' },
          { text: 'FAQ', link: '/en/guide/faq' },
          {
            text: '🌐 Languages',
            items: [
              { text: '简体中文', link: '/' },
              { text: '繁體中文', link: '/zh-hant/' },
              { text: 'English (Current)', link: '/en/' },
              { text: '喵星語 🐾', link: '/meow/' }
            ]
          },
          {
            text: 'Links',
            items: [
              { text: 'GitHub Repository', link: 'https://github.com/KernelExtend/KernelEX' },
              { text: 'Release Downloads', link: 'https://github.com/KernelExtend/KernelEX/releases' },
              { text: 'Telegram Channel', link: 'https://t.me/KernelEX' }
            ]
          }
        ],
        sidebar: [
          {
            text: 'Documentation',
            items: [
              { text: 'Quick Start', link: '/en/guide/start' },
              { text: 'Core Features', link: '/en/guide/features' },
              { text: 'FAQ', link: '/en/guide/faq' }
            ]
          }
        ],
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        outline: {
          label: 'On this page'
        },
        langMenuLabel: 'Change Language',
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance'
      }
    },
    meow: {
      label: '喵星語 🐾',
      lang: 'zh-CN-meow',
      link: '/meow/',
      title: 'KernelEX 🐾',
      description: '专为 Android ROOT 猫窝打造的脚本与爪爪程序可视化调度神器喵！',
      themeConfig: {
        nav: [
          { text: '快速抓起', link: '/meow/guide/start' },
          { text: '爪爪特性', link: '/meow/guide/features' },
          { text: '喵喵答疑', link: '/meow/guide/faq' },
          {
            text: '🌐 猫语切换喵',
            items: [
              { text: '简体中文', link: '/' },
              { text: '繁體中文', link: '/zh-hant/' },
              { text: 'English', link: '/en/' },
              { text: '喵星語 🐾 (当前爪印)', link: '/meow/' }
            ]
          },
          {
            text: '爪印传送门',
            items: [
              { text: 'GitHub 窝点', link: 'https://github.com/KernelExtend/KernelEX' },
              { text: '打包领回家 (Releases)', link: 'https://github.com/KernelExtend/KernelEX/releases' },
              { text: 'Telegram 喵群', link: 'https://t.me/KernelEX' }
            ]
          }
        ],
        sidebar: [
          {
            text: '喵爪指南',
            items: [
              { text: '快速抓起', link: '/meow/guide/start' },
              { text: '爪爪特性', link: '/meow/guide/features' },
              { text: '喵喵答疑 (FAQ)', link: '/meow/guide/faq' }
            ]
          }
        ],
        docFooter: {
          prev: '上一爪',
          next: '下一爪'
        },
        outline: {
          label: '喵爪雷达'
        },
        langMenuLabel: '猫言猫语选择喵',
        returnToTopLabel: '飞回爪顶喵',
        sidebarMenuLabel: '爪爪菜单',
        darkModeSwitchLabel: '亮黑毛色切换'
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KernelExtend/KernelEX' }
    ],
    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright © 2026 KernelExtend Team'
    }
  }
})
