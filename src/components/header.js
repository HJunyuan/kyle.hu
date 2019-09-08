import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Container, Nav, Navbar } from "react-bootstrap";

import styles from "./header.module.css";

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
		<Navbar collapseOnSelect expand="lg" className={styles.navBar} bg="dark" variant="dark" sticky="top">
			<Container>
				<Navbar.Brand href="/">
					<Img fixed={query.img.childImageSharp.fixed} alt="Site logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
						<Nav.Link href="#projects">Projects</Nav.Link>
					</Nav>
					<Nav>
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
