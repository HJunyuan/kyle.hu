import React from "react";
import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import Img from "gatsby-image";

import cardStyles from "./card.module.css";

export default function Card({ data, title, description, image }) {
	return (
		<div className={cardStyles.cardContainer}>
			<div className={cardStyles.cardImage}>
				{/* <Img fluid={} alt={this.props.title} /> */}
				{/* <img src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg" /> */}
			</div>
			<div className={cardStyles.cardDescription}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

// const query = graphql`
// 	query {
// 		placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
// 			childImageSharp {
// 				fluid(maxWidth: 300) {
// 					...GatsbyImageSharpFluid
// 				}
// 			}
// 		}
// 	}
// `;

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
};

Card.defaultProps = {
	title: `Default Title`,
	description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex dui, pharetra at vehicula et, tincidunt
	at est. Donec cursus egestas blandit.`,
	image: `Default Image`
};
