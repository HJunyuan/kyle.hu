import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import styles from "./card.module.css";

export default function Card({ image, date, title, description, path }) {
	const query = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	// If image prop is undefined, set default image
	if (!image) image = query.placeholderImage.childImageSharp.fluid;

	return (
		<Link className={styles.link} to={path}>
			<div className={styles.cardContainer}>
				<Img className={styles.cardImage} fluid={image} alt={title} />

				<div className={styles.cardDescription}>
					{date && <span>{date}</span>}
					<h3>{truncate(title, 8)}</h3>
					<p>{truncate(description, 23)}</p>
				</div>
			</div>
		</Link>
	);
}

const truncate = (str, numWords) => {
	return str
		.split(" ")
		.splice(0, numWords)
		.join(" ");
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	path: PropTypes.string
};

Card.defaultProps = {
	title: `Default Title`,
	description: `Lorem ipsum dolor sit amet, contetur adipiscing elit. Integer ex dui, pharetra at vehicula et, tincidunt
	at est. Donec cursus egestas blandit.`,
	path: `/#`
};
