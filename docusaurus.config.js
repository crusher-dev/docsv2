const path = require('path');

const BASE_URL = '';

module.exports = {
  title: 'Crusher Documentation',
  tagline:
    'Crusher is low-code testing platform, build test remarkably fast. Ship high quality product, faster than ever before.',
  url: 'https:/crusher.dev',
  baseUrl: `${BASE_URL}/`,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: { label: 'English' },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta/favicon.png',
  organizationName: 'crusherdev',
  projectName: 'crusher-docs',
  themeConfig: {
    autoCollapseSidebarCategories: true,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Crusher Logo',
        src: `/logos/logo.svg`,
        srcDark: `/logos/logo.svg`,
        href: '/',
        target: '_self',
        width: 78,
        height: 24,
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'index',
        //   label: 'Guide',
        //   position: 'left',
        // },
        // {
        //   type: 'doc',
        //   docId: 'components',
        //   label: 'Components',
        //   position: 'left',
        // },
        {
          type: 'doc',
          docId: 'cli',
          label: 'CLI',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'separator',
          position: 'right',
        },
        {
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'github logo',
            src: `/logos/github.svg`,
            href: 'https://github.com/crusherdev/crusher',
            target: '_blank',
          },
        },
        // {
        //   type: 'iconLink',
        //   position: 'right',
        //   icon: {
        //     alt: 'discord logo',
        //     src: `/logos/discord.svg`,
        //     href: 'https://ionic.link/discord',
        //     target: '_blank',
        //   },
        // },

      ],
    },
    tagManager: {
      trackingID: 'GTM-TKMGCBC',
    },
    prism: {
      theme: { plain: {}, styles: [] },
      // https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
      additionalLanguages: ['shell-session', 'http'],
    },
    algolia: {
      appId: 'O9QSL985BS',
      apiKey: 'ceb5366064b8fbf70959827cf9f69227',
      indexName: 'ionicframework',
      contextualSearch: true,
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          return `https://github.com/crusher-dedv/crusher-docs/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        exclude: ['README.md'],
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v6',
            banner: 'none',
          },
        },
      },
    ],
    '@docusaurus/plugin-content-pages',
    '@docusaurus/plugin-debug',
    '@docusaurus/plugin-sitemap',
    '@ionic-internal/docusaurus-plugin-tag-manager',
  ],
  themes: [
    [
      //overriding the standard docusaurus-theme-classic to provide custom schema
      path.resolve(__dirname, 'docusaurus-theme-classic'),
      {
        customCss: [
          require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
          require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
          require.resolve('./src/styles/custom.scss'),
        ],
      },
    ],
    path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'),
  ],
  customFields: {},
};
