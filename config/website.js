const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'shelley cavaness - shellyeah', // Navigation and Site Title
  siteTitleAlt: 'shelley', // Alternative Site title for SEO
  siteTitleShort: 'shelley', // short_name for manifest
  siteHeadline: 'shelley cavaness', // Headline for schema.org JSONLD
  siteUrl: 'https://shelleycavaness.github.io/improved-journey', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'quick site to getme a job',
  author: 'shellyeah', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@shelleycavaness', // Twitter Username
  ogSiteName: 'shelley', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
