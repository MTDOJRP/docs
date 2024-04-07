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
            label: 'Getting Started',
          },
          {
            href: 'https://KCDOJRP.com',
            label: 'KCDOJRP',
            position: 'right',
          },
          {
            href: 'https://CAD.KCDOJRP.com',
            label: 'CAD',
            position: 'right',
          },
          {
            href: 'https://discord.gg/sAAMeZZvrq',
            label: 'Discord',
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
