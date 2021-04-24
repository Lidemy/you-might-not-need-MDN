/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'You Might Not Need MDN',
  tagline: '沒有要反對 MDN 的意思，只是想要提供一個更簡易的 Cheat Sheet 給入門的開發者。',
  url: 'https://you-might-not-need-mdn.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Lidemy', // Usually your GitHub org/user name.
  projectName: 'you-might-not-need-mdn', // Usually your repo name.
  themeConfig: {
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Lidemy, Inc. Built with Docusaurus.`,
    },
    navbar: {
      title: 'You Migh Not Need MDN',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.png',
      },
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
