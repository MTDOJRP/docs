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
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left'
          },
          {
            position: 'left',
            label: 'Getting Started',
            items: [
              {
                href: '/docs/getting-started/joining-server',
                label: 'First Join',
              },
              {
                href: '/docs/getting-started/server-rules',
                label: 'Server Rules',
              },
              {
                href: '/docs/getting-started/microphone-setup',
                label: 'Voice Chat',
              },
              {
                href: '/docs/getting-started/trusted-civs',
                label: 'Civilian Levels',
              },
              {
                href: '/docs/intro',
                label: 'Table of Contents',
              },
            ]
          },
          {
            position: 'left',
            label: 'Law Enforcement',
            items: [
              {
                href: '/docs/law-enforcement/apply',
                label: 'Apply for LEO',
              },
              {
                href: '/docs/law-enforcement/roster',
                label: 'Active Roster',
              },
              {
                href: '/docs/law-enforcement/learning/structure',
                label: 'Department Structure',
              },
              {
                href: '/docs/law-enforcement/learning/ten-codes',
                label: '10-Codes',
              },
              {
                href: '/docs/law-enforcement/learning/d-codes',
                label: 'David-Codes',
              }
            ]
          },
          {
            position: 'left',
            label: 'Fire & EMS',
            items: [
              {
                href: '/docs/fire-ems/apply',
                label: 'Apply for Fire / EMS',
              },
              {
                href: '/docs/fire-ems/roster',
                label: 'Active Roster',
              },
              {
                href: '/docs/fire-ems/learning/structure',
                label: 'Department Structure',
              },
            ]
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
