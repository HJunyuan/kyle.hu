import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Col, Container, Row } from "react-bootstrap";

export default function() {
	const query = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<footer>
			<Container>
				<Row className="align-items-end my-2">
					<Col className="col-auto mx-auto mx-sm-0">
						<p className="subtitle text-center">Follow Kyle at</p>

						<center>
							<a href="https://www.facebook.com/HJunyuan" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a href="https://twitter.com/HJunyuan" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="https://www.instagram.com/HJunyuan" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-instagram"></i>
							</a>
							<a href="https://www.linkedin.com/in/kyle-huang-junyuan/" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-linkedin-in"></i>
							</a>
							<a href="https://www.youtube.com/TechLingo" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-youtube"></i>
							</a>
							<a href="https://www.flickr.com/photos/kylehjunyuan/albums" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-flickr"></i>
							</a>
						</center>
					</Col>
					<div className="w-100 d-block d-sm-none my-2"></div>
					<Col className="col-auto mx-auto mx-sm-0 ml-sm-auto">
						<a href="https://github.com/HJunyuan" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-github"></i>
						</a>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col>
						<p className="text-muted text-center text-sm-left">
							© {new Date().getFullYear()} {query.site.siteMetadata.title}
							<br />
							All rights reserved
						</p>
					</Col>
				</Row>

				{/* <Row className="">
					<Col>
						<p className="footer-link">
							<Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> |{" "}
							<Link to="/blog">Blog</Link>
						</p>
					</Col>
				</Row> */}
			</Container>
		</footer>
	);
}
