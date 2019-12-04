import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { Button, Col, Row, Card, CardDeck, Container } from "react-bootstrap";

import SEO from "../components/seo";
import Layout from "../components/layout";

export default function IndexPage({ data }) {
	const projectCards = data => {
		let cards = [];

		data.edges.forEach((element, i) => {
			let { frontmatter } = element.node;
			let { fluid } = frontmatter.coverImg.childImageSharp;

			cards.push(
				<React.Fragment key={i}>
					{(i + 1) % 3 === 0 ? <div className="w-100 d-none d-sm-block d-md-block d-lg-none d-xl-none my-2" /> : null}
					<Card>
						<Link to={frontmatter.path}>
							<Img
								className="card-img-top"
								style={{ height: "200px" }}
								fluid={fluid}
								alt={frontmatter.title}
								draggable={false}
							/>
							<Card.Body>
								<Card.Text as="h5">{frontmatter.title}</Card.Text>
							</Card.Body>
						</Link>
					</Card>
				</React.Fragment>
			);
		});

		return cards;
	};

	const blogCards = data => {
		let cards = [];

		data.edges.forEach((element, i) => {
			let { frontmatter } = element.node;
			let { fluid } = frontmatter.coverImg.childImageSharp;

			let excerpt = frontmatter.excerpt ? frontmatter.excerpt.slice(0, 150) + "..." : element.node.excerpt;

			cards.push(
				<React.Fragment key={i}>
					{(i + 1) % 3 === 0 ? <div className="w-100 d-none d-sm-block d-md-block d-lg-none d-xl-none my-2" /> : null}
					<Card>
						<Link to={frontmatter.path}>
							<Img
								className="card-img-top"
								style={{ height: "190px" }}
								fluid={fluid}
								alt={frontmatter.title}
								draggable={false}
							/>
							<Card.Body>
								<Card.Subtitle className="mb-2 text-muted" as="p">
									{frontmatter.date}
								</Card.Subtitle>
								<Card.Title>{frontmatter.title}</Card.Title>
								<Card.Text>{excerpt}</Card.Text>
							</Card.Body>
						</Link>
					</Card>
				</React.Fragment>
			);
		});

		return cards;
	};

	return (
		<React.Fragment>
			<SEO title={data.site.siteMetadata.title + ` | ` + data.site.siteMetadata.description} />
			<Layout noContainer>
				<div className="position-relative" style={{ height: "95vh", minHeight: "550px" }}>
					<Img fluid={data.landingImage.childImageSharp.fluid} className="w-100 h-100" />

					<div className="position-absolute w-100 h-100" style={{ top: "45%" }}>
						<Container>
							<h1 className="m-0 name">Kyle Huang Junyuan</h1>
							<p className="subtitle">Improving lives with technology</p>
							{/* <p style={{ maxWidth: "450px" }} className="my-4">
								Innovation and its ability to make an impact on the world has always fascinated me. It is my life goal
								to understand how technology works in the hopes that someday, I could make the dreams of mine and others
								into reality. I genuinely crave to address challenges with the use of technology to improve lives by
								making a positive difference in the world. No future we dream of is impossible if we set our mind to it.
								Just as innovators who often use ingenious yet simple solutions to solve complex problems, there is
								always a way!
							</p> */}
							<Link to="/about">
								<Button>Learn more about Kyle</Button>
							</Link>
						</Container>
					</div>
				</div>

				<Container>
					<Row className="justify">
						<Col className="my-5">
							<h2 className="mb-0">Projects</h2>
							<div className="d-flex align-items-end mb-2">
								<p className="flex-grow-1 subtitle">A glimpse of my adventures</p>
								<Link className="tagline-btn d-none d-sm-block" to="/projects">
									View all
								</Link>
							</div>
							<CardDeck className="mb-4">{projectCards(data.projects)}</CardDeck>
							<center className="d-block d-sm-none">
								<Button>View all projects</Button>
							</center>
						</Col>
					</Row>
					<Row>
						<Col className="my-5">
							<h2 className="m-0">Blog</h2>
							<div className="d-flex align-items-end mb-2">
								<p className="flex-grow-1 subtitle">Recent posts</p>
								<Link className="tagline-btn d-none d-sm-block" to="/blog">
									View all
								</Link>
							</div>
							<CardDeck className="mb-4">{blogCards(data.blogs)}</CardDeck>
							<center className="d-block d-sm-none">
								<Button>View all blog posts</Button>
							</center>
						</Col>
					</Row>
				</Container>
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
						path
						published
						coverImg {
							childImageSharp {
								fluid(maxWidth: 350) {
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
						excerpt
						path
						published
						coverImg {
							childImageSharp {
								fluid(maxWidth: 350) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					excerpt(format: PLAIN, pruneLength: 150, truncate: true)
				}
			}
		}
		landingImage: file(relativePath: { eq: "landing.png" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}
		site {
			siteMetadata {
				description
				title
			}
		}
	}
`;
