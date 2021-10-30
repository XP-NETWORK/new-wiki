// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to the XP Network Docs',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xp-network', // Usually your GitHub org/user name.
  projectName: 'xp.network.wiki', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
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
      navbar: {
        title: 'XP.Network',
        logo: {
          alt: 'XP Network Wiki',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Home',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/xp-network',
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
                label: 'Wiki',
                to: '/docs/Home',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/xp_network',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/XPNetwork_?ref_src=twsrc%5Etfw',
              },
              {
                label: 'Medium',
                href: 'https://blog.xp.network/',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/user/XP_network/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/xp-network/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://xp.network',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xp-network',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} XP.Network Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      themeConfig:{
        colorMode:{
          defaultMode: 'dark',
          disableSwitch: false,
          backgroundColor:"#1D2030",
        },
      }
    }),
};

module.exports = config;
