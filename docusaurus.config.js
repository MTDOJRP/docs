// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MTDOJRP',
  tagline: 'Montana Department of Justice Roleplay Documentation',
  favicon: 'img/favicon.ico',
  url: 'https://docs.mtdojrp.org',
  baseUrl: '/',
  organizationName: 'MTDOJRP',
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
        title: 'MTDOJRP',
        logo: {
          alt: 'MTDOJRP',
          src: 'img/MTDOJRP.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'startedSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          {
            href: 'https://mtdojrp.org',
            label: 'MTDOJRP',
            position: 'right',
          },
          {
            href: 'https://CAD.mtdojrp.org',
            label: 'CAD',
            position: 'right',
          },
          {
            href: 'https://mtdojrp.org',
            label: 'Discord',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} MTDOJRP.`,
      },
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme,
      },
    }),
};

module.exports = config;
