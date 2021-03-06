module.exports = {
  siteMetadata: {
    title: `幻想手帖 | Final Fantasy XIV fansite`,
    name: `幻想手帖`,
    siteUrl: `https://eorzea.damonge.com`,
    description: `Final Fantasy XIV のスクリーンショットなどまとめるファンサイト`,
    hero: {
      heading: `Of the Sky, From the Sky, For the Sky`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/BIG_MON`,
      },
      {
        name: `github`,
        url: `https://github.com/big-mon/ff14-aetheryte`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `幻想手帖`,
        short_name: `幻想手帖`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
  ],
};
