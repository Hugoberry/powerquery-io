// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PowerQuery.io',
  tagline: 'PoweerQuery/M language reference',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://powerquery.io',
  baseUrl: '/',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['da','de','en','es','fi','fr','hi','it','ja','nl','pl','pt-PT','pt-BR','ro','ru','tr','uk','vi']
    // locales: ['ca','cs','da','de','el','en','es','fi','fr','gl','hi','hu','id','it','ja','kk','ko','lt','lv','ms','nl','pl','pt','pt-BR','ro','ru','sk','sl','sk-Cyrl','sr-Latn','sv','th','tr','uk','vi','zh-Hans','zh-Hant']
  },

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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'PowerQuery.io',
        logo: {
          alt: 'PowerQuery.io Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} PowerQuery.io. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powerquery'],
      },
      algolia:{
        appId: '3PZMY1RNB7',
        apiKey: 'd7142d2354ff38d3603c4c193a8bdfc7',
        indexName: 'powerquery',
        contextualSearch: true,
      }
    }),
};

export default config;
