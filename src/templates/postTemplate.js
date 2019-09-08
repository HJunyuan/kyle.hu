import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

export default function PostTemplate({
	data // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data; // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark;
	return (
		<Layout>
			<h1>{frontmatter.title}</h1>
			<h2>{frontmatter.date}</h2>
			<Img fluid={frontmatter.coverImg.childImageSharp.fluid} alt={frontmatter.title}></Img>
			<div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
		</Layout>
	);
}

export const query = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "DD MMMM YYYY")
				path
				title
				coverImg {
					childImageSharp {
						fluid(maxHeight: 500) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
