import { NavbarConfig } from '@vuepress/theme-default';

export const en: NavbarConfig = [
  {
    text: 'Getting started',
    link: '/',
  },
  {
    text: 'Blocks',
    link: '/blocks/trigger.md',
  },
  {
    text: 'API Reference',
    link: '/api-reference',
    children: [
      '/api-reference/data-columns',
      '/api-reference/reference-data',
      '/api-reference/global-data.md',
      '/api-reference/blocks.md',
    ],
  },
  {
    text: 'Home',
    link: 'https://www.automa.site/',
  },
  {
    text: 'Marketplace',
    link: 'https://www.automa.site/workflows',
  },
];
