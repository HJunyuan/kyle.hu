import React from "react";
import { graphql } from "gatsby";
// import { Link } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import CardScroll from "../components/cardScroll";

export default function IndexPage({ data }) {
	return (
		<Layout>
			<SEO title="Home" />
			<h1>Kyle Huang Junyuan</h1>
			<p>Improving lives with technology.</p>

			<h2>Projects</h2>
			<CardScroll data={data.projects} />

			<h2>Blog</h2>
			<CardScroll data={data.blogs} />
		</Layout>
	);
}

export const query = graphql`
	{
		projects: allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "projects" } } }
			sort: { order: DESC, fields: frontmatter___date }
			limit: 10
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
								fluid(maxHeight: 300) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
		blogs: allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "blog" } } }
			sort: { order: DESC, fields: frontmatter___date }
			limit: 10
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
								fluid(maxHeight: 300) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`;
