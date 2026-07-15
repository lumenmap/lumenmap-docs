import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Guide',
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
      items: ['api/activity'],
    },
    'roadmap',
  ],
};

export default sidebars;
