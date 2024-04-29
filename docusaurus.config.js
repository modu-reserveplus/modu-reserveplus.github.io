import {themes as prismThemes} from 'prism-react-renderer';

const siteUrl = `https://docs.mil-tech.gov.ua/`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Акселератор MOУ',
  tagline: 'Welcome to MoDA Knowledge Base',
  favicon: 'img/favicon.png',

  url: `${siteUrl}`,
  baseUrl: '/',

  organizationName: 'modu',
  projectName: 'modu-reserveplus',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'uk',
    locales: ['en', 'uk'],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: 'en-US',
      },
      uk: {
        label: "Українська",
        htmlLang: 'uk-UA',
      }
    }
  },

  plugins: [
    'docusaurus-plugin-less',
  ],

  scripts: [
    {
      src: '/js/locale.js',
      async: false
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/moda-fb-card.webp',
      navbar: {
        title: '',
        logo: {
          alt: 'Military of Defence of Ukraine',
          src: 'img/logo.webp',
          height: 55,
        },
        items: [
          {
            type: "html",
            value: `<div class="logo-title text-logo-en"><div class="logo-title__main">БАЗА ЗНАНЬ ДЛЯ ВИРОБНИКІВ ОПК</div><div class="logo-title__sub">За підтримки Акселератора Міноборони</div></div>`
          },
          {
            type: "html",
            value: `<div class="logo-title text-logo-uk"><div class="logo-title__main">БАЗА ЗНАНЬ ДЛЯ ВИРОБНИКІВ ОПК</div><div class="logo-title__sub">За підтримки Акселератора Міноборони</div></div>`
          },
          {
            type: 'search',
            position: 'right',
          }
          ,{
            type: "html",
            value: `
                    <div style="display:none">
                     <a href="/" class="locale-link locale-ua"><img src="/img/locale_ua.webp"/> UA</a>
                     <a href="/en/" class="locale-link locale-en"><img src="/img/locale_en.webp"/> EN</a>
                     </div>
                   `,
            position: 'right'
          }
        ],
      },
      footer: {
        // logo: {
        //   alt: 'Military of Defence of Ukraine',
        //   src: 'img/logo.webp',
        //   height: 55,
        //   href: "/"
        // },
        style: 'dark',
        links: [
          {
            html: `
                <a href="/" class="logo-wrapper">
                    <img src="/img/logo.webp"/>
                    <div class="logo-title"><div class="logo-title__main">АКСЕЛЕРАТОР</div><div class="logo-title__sub">Міністерство Оборони України</div></div>
                </a>
            `
          },
          {
            html: `
                <a href="https://mil-tech.gov.ua/" class="link-to-main">
                  <div class="copy ml-auto copy-ua">Міністерство Оборони України. Всі права захищені.<br><span class="temp-text">Сайт працює у тестовому режимі! Окремий його функціонал ще в розробці. Контент буде оновлюватись. Дякуємо за розуміння</span></div>
                  <div class="copy ml-auto copy-en">Military of Defence of Ukraine.<br>All Rights Reserved.</div>
                </a>
            `
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.darcula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
