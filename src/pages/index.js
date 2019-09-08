import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Layout from "../components/layout";
import CardScroll from "../components/cardScroll";
import Styles from "./index.module.css";

export default function IndexPage({ data }) {
	return (
		<React.Fragment>
			<SEO title="Home" />
			<Img className={Styles.image} fluid={data.landingImage.childImageSharp.fluid} alt="Kyle Huang Junyuan" />
			<div className={Styles.container}>
				<div className={Styles.text}>
					<h1>Kyle Huang Junyuan</h1>
					<p>Improving lives with technology.</p>
				</div>
			</div>

			<Layout>
				<h2>Projects</h2>
				<CardScroll data={data.projects} />

				<h2>Blog</h2>
				<CardScroll data={data.blogs} />
			</Layout>
		</React.Fragment>
	);
}

export const query = graphql`
	{
		projects: allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "projects" } } }
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
								fluid(maxHeight: 300) {
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
