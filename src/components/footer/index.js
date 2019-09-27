import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Footer() {
	const query = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<footer>
			© {new Date().getFullYear()}, {query.site.siteMetadata.title}
			<br />
			All rights reserved.
		</footer>
	);
}
