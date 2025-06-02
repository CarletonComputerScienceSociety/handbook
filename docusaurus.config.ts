import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CCSS Handbook',
  tagline: 'The Handbook of the Carleton Computer Science Society',
  favicon: 'img/favicon.ico',
  url: 'https://handbook.carletoncomputersciencesociety.ca',
  baseUrl: '/',
  organizationName: 'carletoncomputersciencesociety',
  projectName: 'handbook',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: "/scripts/shynet-inject.js",
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/CarletonComputerScienceSociety/handbook/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    algolia: {
      appId: ALGOLIA_APP_ID,
      apiKey: ALGOLIA_API_KEY,
      indexName: ALGOLIA_INDEX_NAME,
      contextualSearch: true,
      searchParameters: {},
      placeholder: 'Search the Handbook',
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: 'new-handbook-notice-may-2025',
      content:
        '📢 This handbook is new! Some pages may be blank or incomplete — feel free to explore and contribute.',
      backgroundColor: '#ffe5e5', // light red/pink background
      textColor: '#8b0000',       // dark red text
      isCloseable: true,
    },
    navbar: {
      title: 'Handbook',
      logo: {
        alt: 'CCSS Handbook Logo',
        src: 'img/ccss-logo.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'allSidebar',
        //   position: 'left',
        //   label: 'Demo',
        // },
        {
          type: 'docSidebar',
          sidebarId: 'organizationSidebar',
          position: 'left',
          label: 'Organization',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'initiativesSidebar',
        //   position: 'left',
        //   label: 'Initiatives',
        // },    
        {
          type: 'docSidebar',
          sidebarId: 'eventsSidebar',
          position: 'left',
          label: 'Events',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developmentSidebar',
          position: 'left',
          label: 'Development',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   type: 'docsVersionDropdown',
        // },
        {
          href: 'https://github.com/carletoncomputersciencesociety',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'X',
        //       href: 'https://x.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Carleton Computer Science Society`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
