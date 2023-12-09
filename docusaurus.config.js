// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MTDOJRP/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/MTDOJRP.png',
      navbar: {
        title: 'KCDOJRP',
        logo: {
          alt: 'KCDOJRP',
          src: 'img/MTDOJRP.png',
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
            href: 'https://discord.gg/PkbPksdAqu',
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
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme,
      },
    }),
};

module.exports = config;
