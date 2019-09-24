import React from "react";
import { graphql } from "gatsby";
import { Button } from "react-bootstrap";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Card from "../components/card";
import CardScroll from "../components/cardScroll";
import Styles from "./index.module.css";

export default function IndexPage({ data }) {
	const generateCards = data => {
		let cards = [];

		data.edges.forEach((element, i) => {
			let { frontmatter } = element.node;
			let { fluid } = frontmatter.coverImg.childImageSharp;

			cards.push(
				<Card
					image={fluid}
					date={frontmatter.date}
					title={frontmatter.title}
					description={frontmatter.description}
					path={frontmatter.path}
					key={i}
				/>
			);
		});

		for (let i = 5; i < 9; i++) cards.push(<Card key={i} />);

		return cards;
	};

	return (
		<React.Fragment>
			<SEO title="Home" />

			<Layout className={Styles.content}>
				<h2>Projects</h2>

				<CardScroll>{generateCards(data.projects)}</CardScroll>
				<Button>View all projects</Button>
				<h2>Blog</h2>
				<CardScroll>{generateCards(data.blogs)}</CardScroll>
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
