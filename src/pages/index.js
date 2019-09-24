import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Button } from "react-bootstrap";

import SEO from "../components/seo";
import Layout from "../components/layout";
import CardScroll from "../components/cardScroll";
import Styles from "./index.module.css";

export default function IndexPage({ data }) {
	return (
		<React.Fragment>
			<SEO title="Home" />

			<Layout className={Styles.content}>
				<h2>Projects</h2>
				<CardScroll data={data.projects} />
				<Button>View all projects</Button>
				<h2>Blog</h2>
				<CardScroll data={data.blogs} />
			</Layout>
		</React.Fragment>
	);
}

export const query = graphql`
	{
		projects: allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "projects" }, published: { eq: true } } }
			sort: { order: DESC, fields: frontmatter___date }
			limit: 4
		) {
			edges {
				node {
					frontmatter {
						title
						description
						path
						published
						coverImg {
							childImageSharp {
								fluid(maxWidth: 300) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
		blogs: allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true } } }
			sort: { order: DESC, fields: frontmatter___date }
			limit: 4
		) {
			edges {
				node {
					frontmatter {
						date(formatString: "DD MMMM YYYY")
						title
						description
						path
						published
						coverImg {
							childImageSharp {
								fluid(maxWidth: 300) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
		landingImage: file(relativePath: { eq: "landing.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
