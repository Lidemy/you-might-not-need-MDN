/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'You Might Not Need MDN',
  tagline: '沒有要反對 MDN 的意思，只是想要提供一個更簡易的 Cheat Sheet 給入門的開發者。',
  url: 'https://alpha-lidemy-mdn.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Lidemy', // Usually your GitHub org/user name.
  projectName: 'you-might-not-need-mdn', // Usually your repo name.
  themeConfig: {
    footer: {
      copyright: `<a href="https://github.com/Lidemy/you-might-not-need-MDN" target="_blank">Source code.</a> Built with Docusaurus.`,
    },
    navbar: {
      title: 'You Might Not Need MDN'
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Lidemy/you-might-not-need-MDN/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
