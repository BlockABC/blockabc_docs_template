import {defineUserConfig, DefaultThemeOptions} from 'vuepress'
import { en } from './locales/en'
import { zh } from './locales/zh'

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  title: 'UniSign',
  locales: {
    '/': {
      lang: 'en-US',
      description: 'blockabc_docs_template description',
    },
    '/zh/': {
      lang: 'zh-CN',
      description: 'blockabc_docs_template 描述',
    }
  },

  // theme and its config
  // theme: 'vuepress-theme-book',
  theme: '@vuepress/theme-default',
  themeConfig: {
    darkMode: false,
    logo: '/favicon.png',
    repo: 'https://github.com/blockabc/blockabc_docs_template',
    locales: {
      '/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        sidebar: en.sidebar,
        navbar: [{
          text: 'Home',
          link: 'blockabc_docs_template'
        }],
      },
      '/zh/': {
        selectLanguageName: '中文',
        selectLanguageText: 'Languages',
        editLinkText: '编辑此页',
        sidebar: zh.sidebar,
        navbar: [{
          text: '官网',
          link: 'blockabc_docs_template'
        }],
      }
    }
  },
  plugins: [
    ['vuepress-plugin-clean-urls', {
      normalSuffix: '',
    }],
    ['@vuepress/plugin-search', {
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }],
  ]
})