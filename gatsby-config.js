require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Enclaveshop`,
    description: ``,
    author: `Anthony Cruz`,
    socialLinks: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/enclaveshop/?hl=en',
      },
    ],
    primaryNav: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Shop',
        link: '/shop',
      },
      {
        name: 'Kontakt',
        link: '/kontakt',
      },
    ],
    secondaryNav: [
      {
        name: 'Versand',
        link: '/versand',
      },
      {
        name: 'Nachhaltigkeit',
        link: '/nachhaltigkeit',
      },
      {
        name: 'Pflegeanleitung',
        link: '/pflegeanleitung',
      },
      {
        name: 'Größentabelle',
        link: '/groesentabelle',
      },
      {
        name: 'Impressum',
        link: '/impressum',
      },
      {
        name: 'Datenschutzerklärung',
        link: '/datenschutzerklaerung',
      },
      {
        name: 'Widerrufsbelehrung',
        link: '/widerrufsbelehrung',
      },
      {
        name: 'AGB',
        link: '/agb',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-apollo-shopify`,
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us1.list-manage.com/subscribe/post?u=010b0be6b400bc8534011644b&amp;id=a8b411d45e'
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        develop: true,
        purgeOnly: ['/all.sass'],
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        apiVersion: "2020-01",
        paginationSize: 250,
        includeCollections: ["shop", "content"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146773242-1",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-shopify-theme`,
        short_name: `gatsby-shopify`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
