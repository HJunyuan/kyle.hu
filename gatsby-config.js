module.exports = {
	siteMetadata: {
		title: `Kyle Huang Junyuan`,
		description: `Improving lives with technology.`,
		author: `@HJunyuan`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown-pages`,
				path: `${__dirname}/content`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		}
		// {
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `Kyle Huang Junyuan`,
		// 		short_name: `HJunyuan`,
		// 		start_url: `/`,
		// 		background_color: `#663399`,
		// 		theme_color: `#663399`,
		// 		display: `minimal-ui`,
		// 		icon: `src/images/site-icon.png` // This path is relative to the root of the site.
		// 	}
		// }
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
