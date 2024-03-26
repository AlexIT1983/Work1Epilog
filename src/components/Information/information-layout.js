import PropTypes from "prop-types";
import { Component } from "react";

export class InformationLayout extends Component {
	render() {
		return (
			<div className=" text-red-500 text-2xl decoration-solid font-extrabold">
				{this.props.information}
			</div>
		);
	}
}

InformationLayout.propTypes = {
	information: PropTypes.string,
};
