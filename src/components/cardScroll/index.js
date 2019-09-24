import React from "react";
// import { Link } from "gatsby";

import styles from "./cardScroll.module.css";
import Card from "../card";

export default function CardScroll({ data }) {
	const generateCards = data => {
		let cards = [];

		data.edges.forEach((element, i) => {
			let { frontmatter } = element.node;
			let { fluid } = element.node.frontmatter.coverImg.childImageSharp;

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

	return <div className={styles.container}>{generateCards(data)}</div>;
}
