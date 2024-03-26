import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {EnumChangefreq} from "sitemap";

const config: Config = {
  title: 'Pieces for Developers',
  tagline: 'Learn how to best use and optimize your workflow with Pieces for Developers!',
  favicon: 'assets/pieces_logos/white_circle.png',

  // Set the production url of your site here
  url: 'https://docs.pieces.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pieces-app',
  projectName: 'documentation',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
  //   https://docusaurus.io/docs/next/api/plugins/@docusaurus/plugin-vercel-analytics
  //   TODO: This plugin is currently in a canary release. We will update this to use the official plugin once it is released
  //   [
  //     'vercel-analytics',
  //     {
  //        debug: true,
  //         mode: 'auto',
  //     },
  //   ],
  //   TODO: Once the official plugin is released, we will remove this and use the official plugin
    "@gracefullight/docusaurus-plugin-vercel-analytics",
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/pieces-app/documentation/tree/main/',
          // docItemComponent: "@theme/ApiItem" // add @theme/ApiItem here
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        googleTagManager: {
          containerId: 'GTM-K8C6QWB',
        },
        sitemap: {
          changefreq: EnumChangefreq.WEEKLY,
          priority: 0.8,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'assets/pfd_preview.png',
    metadata: [
      {
        name: 'og:image',
        content: 'assets/pfd_preview.png'
      },
    ],

    announcementBar: {
      id: 'new-docs',
      content: '🚀 Welcome to the new Pieces for Developers Documentation! 🚀',
    },

    // The following logic ensures that Algolia search is only used for production deployments
    algolia: {
      appId: 'KTOXFODR65',
      apiKey: 'ea4804560699e4b727715163b74bea83',
      indexName: 'pieces_docusaurus',
    },

    navbar: {
      logo: {
        alt: 'Pieces for Developers',
        src: 'assets/pieces_logos/wordmark.svg',
        srcDark: 'assets/pieces_logos/white_wordmark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          label: 'Learn',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sdksOverviewSidebar',
          label: 'Build',
          position: 'right',
        },
        {
          to: '/community',
          label: 'Community',
          position: 'right',
        },
        {
          to: '/support',
          label: 'Support',
          position: 'right',
        },
        {
          to: '/faq',
          label: 'FAQ',
          position: 'right',
        },
        {
          href: 'https://github.com/pieces-app/documentation',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },

    footer: {
      links: [
        {
          title: 'Socials',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/getpieces',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/getpieces',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/getpieces',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@getpieces',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/getpieces',
            }
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              href: 'https://code.pieces.app/blog',
            },
            {
              label: 'Product Updates',
              href: 'https://code.pieces.app/updates',
            },
            {
              label: 'Press',
              href: 'https://news.pieces.app',
            },
            {
              label: 'Newsletter',
              href: 'https://thepiecespost.beehiiv.com',
            }
          ],
        },
        {
          title: 'Terms & Policies',
          items: [
            {
              label: 'Privacy Policy',
              href: '/privacy-policy',
            },
            {
              label: 'Terms of Service',
              href: '/terms',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mesh Intelligent Technologies, Inc. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
