import React, { Component } from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";

export default class Header extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return <header>{this.props.siteTitle}</header>;
	}
}

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};
