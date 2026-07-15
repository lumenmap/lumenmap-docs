import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LumenMap',
  tagline: 'Stellar network activity at a glance',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://lumenmap.github.io',
  baseUrl: '/lumenmap/',

  organizationName: 'lumenmap',
  projectName: 'lumenmap',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/lumenmap/lumenmap/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'LumenMap',
      logo: {
        alt: 'LumenMap',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/lumenmap/lumenmap',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/guide/getting-started',
            },
            {
              label: 'Using the Dashboard',
              to: '/docs/guide/using-the-dashboard',
            },
            {
              label: 'API',
              to: '/docs/api/activity',
            },
            {
              label: 'Roadmap',
              to: '/docs/roadmap',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/lumenmap/lumenmap',
            },
            {
              label: 'Contributing',
              to: '/docs/guide/contributing',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LumenMap contributors. MIT License.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
