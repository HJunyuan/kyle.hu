import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Styles from "./postTemplate.module.css";

export default function PostTemplate({
	data // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data; // data.markdownRemark holds our post data
	const { html, excerpt, frontmatter } = markdownRemark;
	console.log(excerpt);

	return (
		<Layout>
			<SEO title={frontmatter.title} description={frontmatter.subtitle || excerpt} />
			<div className={Styles.cardContainer}>
				<div className={Styles.cardImage}>
					<Img fluid={frontmatter.coverImg.childImageSharp.fluid} alt={frontmatter.title} />
				</div>
				<div className={Styles.content}>
					<h1 className={Styles.title}>{frontmatter.title}</h1>
					<p className="subtitle font-italic">{frontmatter.subtitle}</p>
					<div className={Styles.date}>{frontmatter.date}</div>
					<hr></hr>
					<div className={Styles.innerContent} dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			excerpt(format: PLAIN)
			frontmatter {
				date(formatString: "DD MMMM YYYY")
				path
				title
				subtitle
				coverImg {
					childImageSharp {
						fluid(maxWidth: 1200) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
