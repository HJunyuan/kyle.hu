import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Layout from "../components/layout";
import { Row, Col } from "react-bootstrap";

export default function({ data }) {
	return (
		<React.Fragment>
			<SEO title={`About Kyle`} />
			<Layout>
				<Row className="my-5" as="section">
					<Col className="col-sm-12 col-md-5 col-lg-4">
						<Img
							fluid={data.landingImage.childImageSharp.fluid}
							draggable={false}
							className="rounded-circle m-auto"
							style={{ maxWidth: "250px", height: "250px" }}
						/>
					</Col>
					<div className="w-100 d-block d-sm-block d-md-none my-4"></div>
					<Col className="align-self-end">
						<h1 className="m-0">About Kyle</h1>
						<p className="subtitle">@HJunyuan</p>
						<p style={{ maxWidth: "550px" }}>
							Innovation and its ability to make an impact on the world has always fascinated me. It is my life goal to
							understand how technology works in the hopes that someday, I could make the dreams of mine and others into
							reality. I genuinely crave to address challenges with the use of technology to improve lives by making a
							positive difference in the world. No future we dream of is impossible if we set our mind to it. Just as
							innovators who often use ingenious yet simple solutions to solve complex problems, there is always a way!
						</p>
					</Col>
				</Row>
				<Row className="my-5" as="section">
					<Col>
						<h2>Guiding Principles</h2>
						<p style={{ maxWidth: "550px" }}>
							Innovation and its ability to make an impact on the world has always fascinated me. It is my life goal to
							understand how technology works in the hopes that someday, I could make the dreams of mine and others into
							reality. I genuinely crave to address challenges with the use of technology to improve lives by making a
							positive difference in the world. No future we dream of is impossible if we set our mind to it. Just as
							innovators who often use ingenious yet simple solutions to solve complex problems, there is always a way!
						</p>
					</Col>
				</Row>
			</Layout>
		</React.Fragment>
	);
}

export const query = graphql`
	{
		landingImage: file(relativePath: { eq: "about-kyle.jpg" }) {
			childImageSharp {
				fluid(maxHeight: 250) {
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
