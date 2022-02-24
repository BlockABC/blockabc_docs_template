import { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = [
  '/',
  '/faq',
  {
    text: 'Guide',
    children: [
      '/guide/start',
      '/guide/start',
    ],
  }]

export const en = {
  sidebar,
}