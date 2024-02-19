// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import 'dotenv/config';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Power Query',
  tagline: 'PowerQuery/M language reference',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://powerquery.io',
  baseUrl: '/',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  titleDelimiter: '-',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    // locales: ['en'],
    locales: ['da','de','en','es','fr','hi','it','ja','nl','pl','pt-PT','pt-BR','ru','sv','th','tr','vi']
    // locales: ['ca','cs','da','de','el','en','es','fi','fr','gl','hi','hu','id','it','ja','kk','ko','lt','lv','ms','nl','pl','pt','pt-BR','ro','ru','sk','sl','sk-Cyrl','sr-Latn','sv','th','tr','uk','vi','zh-Hans','zh-Hant']
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/category/accessing-data',
            from: '/accessing-data',
          },
          {
            to: '/category/table',
            from: '/table',
          },
          {
            to: '/category/record',
            from: '/record',
          },
          {
            to: '/category/function',
            from: '/function',
          },
          {
            to: '/category/number',
            from: '/number',
          },
          {
            to: '/category/combiner',
            from: '/combiner',
          },
          {
            to: '/category/logical',
            from: '/logical',
          },
          {
            to: '/category/text',
            from: '/text',
          },
          {
            to: '/category/date-time',
            from: '/date-time',
          },
          {
            to: '/category/date-time-zone',
            from: '/date-time-zone',
          },
          {
            to: '/category/list',
            from: '/list',
          },
          {
            to: '/category/diagnostics',
            from: '/error',
          },
          {
            to: '/category/diagnostics',
            from: '/diagnostics',
          },
          {
            to: '/category/binary',
            from: '/binary',
          },
          {
            to: '/category/binary',
            from: '/binary-formats',
          },
          {
            to: '/category/replacer',
            from: '/replacer',
          },
          {
            to: '/category/splitter',
            from: '/splitter'
          },
          {
            to: '/category/value',
            from: '/metadata'
          },
          {
            to: '/category/time',
            from: '/time',
          },
          {
            to: '/category/type',
            from: '/type',
          },
          {
            to: '/category/uri',
            from: '/uri',
          },
          {
            to: '/category/value',
            from: '/values',
          },
          {
            to: '/category/expression',
            from: '/expression',
          },
          {
            to: '/category/cube',
            from: '/cube',
          },
          {
            to: '/category/value',
            from: '/action',
          },
          {
            to: '/category/lines',
            from: '/lines',
          },
          {
            to: '/category/comparer',
            from: '/comparer',
          },
          {
            to: '/category/duration',
            from: '/duration',
          },
          {
            to: '/category/documentdb',
            from: '/accessing-data/document-db/documentdb.contents',
          },
          {
            to: '/category/json',
            from: '/text/json.fromvalue',
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        googleAnalytics: {
          trackingID: 'UA-127401670-1',
          anonymizeIP: true,
        },
        gtag: {
          trackingID: 'G-LRQEGBG7ES',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/powerquery-social-card.png',
      navbar: {
        title: 'PowerQuery.io',
        logo: {
          alt: 'PowerQuery.io Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href:'https://chat.powerquery.io',
            label: '🧠Chat',
            position: 'right',
          },
          {
            href: 'https://github.com/Hugoberry/powerquery-io',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      metadata: 
        [
          {name: 'keywords', content: 'PowerQuery, M language, M language reference, PowerQuery reference, PowerQuery documentation'},
          {name: 'yandex-verification', content: '316975f57acf3cea'},
        ],
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} PowerQuery.io. All content is provided as is. Information is based on Microsoft's documentation and belongs to Microsoft Corp.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powerquery'],
      },
      algolia:{
        appId: '3PZMY1RNB7',
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: 'powerquery',
        contextualSearch: true,
      }
    }),
};

export default config;
