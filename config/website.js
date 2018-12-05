const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Resume - Zido', // Navigation and Site Title
  siteTitleAlt: 'resume,zido,', // Alternative Site title for SEO
  siteUrl: 'https://resume.zido.site', // Domain of your site. No trailing slash!
  siteLanguage: 'zh_CN', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'colorful resume website for zido',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@@U_I_share', // Twitter Username
  ogSiteName: '邬虹旭', // Facebook Site Name
  ogLanguage: 'zh_CN', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
