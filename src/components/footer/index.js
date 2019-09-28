import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Container } from "react-bootstrap";

export default function() {
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
		<footer className="footer">
			<Container>
				© {new Date().getFullYear()}, {query.site.siteMetadata.title}
				<br />
				All rights reserved.
			</Container>
		</footer>
	);
}
