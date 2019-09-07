import React, { Component } from "react";
import PropTypes from "prop-types";

import cardStyles from "./card.module.css";
import Image from "../components/image";

export default class Card extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<div className={cardStyles.cardContainer}>
				<div className={cardStyles.cardImage}>
					<img src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg" />
				</div>
				<div className={cardStyles.cardDescription}>
					<h3>Title</h3>
					<p>
						Something aekrjw were arer Description Description Description Description Description Description
						Description Description{" "}
					</p>
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	imageURL: PropTypes.string
};

Card.defaultProps = {
	imageURL: ``
};
