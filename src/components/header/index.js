import React from "react";
import { Link } from "gatsby";
// import Img from "gatsby-image";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
	// const query = useStaticQuery(graphql`
	// 	{
	// 		img: file(relativePath: { eq: "site-icon.png" }) {
	// 			childImageSharp {
	// 				fixed(width: 50) {
	// 					...GatsbyImageSharpFixed
	// 				}
	// 			}
	// 		}
	// 	}
	// `);
	// <Img fixed={query.img.childImageSharp.fixed} title="Home" alt="Kyle's Logo" />

	return (
		<Navbar collapseOnSelect expand="md" bg="white" sticky="top">
			<Container>
				<Navbar.Brand href="/">K</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Link className="nav-link" href="#">
							About
						</Link>
						<Link className="nav-link" href="#">
							Projects
						</Link>
						<Link className="nav-link" href="#">
							Blog
						</Link>
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
