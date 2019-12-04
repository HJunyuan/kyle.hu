import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Layout from "../components/layout";
import { Container } from "react-bootstrap";

export default function({ data }) {
	return (
		<React.Fragment>
			<SEO title={`About | ` + data.site.siteMetadata.title} />
			<Layout noContainer>
				<section className="position-relative" style={{}}>
					<Img
						fluid={data.landingImage.childImageSharp.fluid}
						style={{ width: "100%", height: "200px", objectFit: "none", objectPosition: "top" }}
					/>
					<div className="position-absolute w-100 h-100" style={{ top: "0%" }}>
						<Container className="d-flex h-100">
							<h1 className="">About Kyle</h1>
							<p className="subtitle">@HJunyuan</p>
							{/* <p style={{ maxWidth: "450px" }} className="my-4">
								Innovation and its ability to make an impact on the world has always fascinated me. It is my life goal
								to understand how technology works in the hopes that someday, I could make the dreams of mine and others
								into reality. I genuinely crave to address challenges with the use of technology to improve lives by
								making a positive difference in the world. No future we dream of is impossible if we set our mind to it.
								Just as innovators who often use ingenious yet simple solutions to solve complex problems, there is
								always a way!
							</p> */}
						</Container>
					</div>
				</section>
				<Container>something</Container>
			</Layout>
		</React.Fragment>
	);
}

export const query = graphql`
	{
		landingImage: file(relativePath: { eq: "about-kyle.jpg" }) {
			childImageSharp {
				fluid(maxHeight: 1920) {
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
