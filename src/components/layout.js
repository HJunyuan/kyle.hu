/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "react-bootstrap";

import Header from "./header";

export default function Layout({ children, noNav }) {
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
		<React.Fragment>
			{noNav ? null : <Header />}
			<Container className="pt-4">{children}</Container>
			<footer>
				© {new Date().getFullYear()}, {query.site.siteMetadata.title}
				<br />
				All rights reserved.
			</footer>
		</React.Fragment>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};
