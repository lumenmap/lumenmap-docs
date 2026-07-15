import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LumenMap',
  tagline:
    'Stellar network activity at a glance — hierarchical treemaps, KPIs, and named entities powered by Hubble.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
  baseUrl: '/',

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
    image: 'img/logo.png',
    metadata: [
      {
        name: 'keywords',
        content:
          'Stellar, Soroban, Hubble, analytics, treemap, dashboard, blockchain',
      },
      {name: 'twitter:card', content: 'summary'},
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'LumenMap',
      logo: {
        alt: 'LumenMap',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/guide/getting-started',
          label: 'Get started',
          position: 'left',
        },
        {
          to: '/docs/api/activity',
          label: 'API',
          position: 'left',
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
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
            {
              label: 'Getting Started',
              to: '/docs/guide/getting-started',
            },
            {
              label: 'Using the Dashboard',
              to: '/docs/guide/using-the-dashboard',
            },
            {
              label: 'Architecture',
              to: '/docs/guide/architecture',
            },
          ],
        },
        {
          title: 'Reference',
          items: [
            {
              label: 'API',
              to: '/docs/api/activity',
            },
            {
              label: 'Entity Registry',
              to: '/docs/guide/entities',
            },
            {
              label: 'Roadmap',
              to: '/docs/roadmap',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/lumenmap/lumenmap',
            },
            {
              label: 'Contributing',
              to: '/docs/guide/contributing',
            },
            {
              label: 'MIT License',
              href: 'https://github.com/lumenmap/lumenmap/blob/main/LICENSE',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LumenMap contributors. MIT License.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'http'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
