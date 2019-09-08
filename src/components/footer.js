import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Styles from "./footer.module.css";

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
		<footer className={Styles.container}>
			© {new Date().getFullYear()}, {query.site.siteMetadata.title}
			<br />
			All rights reserved.
		</footer>
	);
}
