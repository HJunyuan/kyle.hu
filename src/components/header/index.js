import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
	const query = useStaticQuery(graphql`
		{
			img: file(relativePath: { eq: "site-icon.png" }) {
				childImageSharp {
					fixed(width: 50) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return (
		<Navbar collapseOnSelect expand="lg" bg="white" sticky="top" style={{ marginBottom: "2rem" }}>
			<Container>
				<Navbar.Brand href="/">
					K{/* <Img fixed={query.img.childImageSharp.fixed} title="Home" alt="Kyle's Logo" /> */}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#projects">Projects</Nav.Link>
						<Nav.Link href="#blog">Blog</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

// <Navbar expand="lg" variant="light" bg="light">
// 	<Container>
// 		<Link>{query.site.siteMetadata.title}</Link>
// 	</Container>
// </Navbar>
