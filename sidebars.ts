import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Guide',
      collapsed: false,
      items: [
        'guide/getting-started',
        'guide/using-the-dashboard',
        'guide/architecture',
        'guide/entities',
        'guide/contributing',
      ],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: ['api/activity'],
    },
    'roadmap',
  ],
};

export default sidebars;
