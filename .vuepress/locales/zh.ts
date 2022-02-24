import { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = [
  '/zh/',
  '/zh/faq',
  {
    text: '帮助',
    children: [
      '/zh/guide/start',
      '/zh/guide/start',
    ],
  }]

export const zh = {
  sidebar,
}