import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KCDOJRP',
  tagline: 'Kelly County Department of Justice Roleplay Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://docs.kcdojrp.com',
  baseUrl: '/',
  organizationName: 'KCDOJRP',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/MTDOJRP/docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: {
        appId: 'OOT1EBT04K',
        apiKey: '6c7e163a830f2e8eb40c06c92e272526',
        indexName: 'kcdojrp',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/',
          to: '/docs/',
        },
        searchParameters: {},
        searchPagePath: 'search',
        insights: true,
      },
      image: 'img/KCDOJRP.png',
      navbar: {
        title: 'KCDOJRP',
        logo: {
          alt: 'KCDOJRP',
          src: 'img/KCDOJRP.png',
        },
        items: [
          {
            position: 'left',
            label: 'Getting Started',
            items: [
              {
                href: '/docs/introduction/getting-started',
                label: 'First Join',
              },
              {
                href: '/docs/leo/information/getting-started',
                label: 'Apply for LEO',
              },
              {
                href: '/docs/leo/information/codes',
                label: 'LEO Codes',
              },
              {
                href: '/docs/leo/information/directory',
                label: 'LEO Roster',
              },
            ]
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://CAD.KCDOJRP.com',
            label: 'CAD',
            position: 'right',
          },
          {
            href: 'https://discord.gg/sAAMeZZvrq',
            html: `<img src="/img/discord.svg" class="discord-icon" alt="Discord" style="width: 24px; height: 24px; vertical-align: middle;" />`,
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} KCDOJRP.`,
      },
      prism: {
        theme: prismThemes.dracula,
        lightTheme: prismThemes.github,
      }
    }),
};

export default config;
