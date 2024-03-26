// Шаблон

import PropTypes from "prop-types";
import { Information } from "./components";
import { Field } from "./components";
import { Component } from "react";

export class GameLayout extends Component {
	render() {
		return (
			<div className="flex flex-col items-center max-w-xs my-12 mx-auto">
				<Information />
				<Field />
				<button
					className="text-lg bg-green-100 border border-black rounded-md px-1.5"
					onClick={this.props.handleRestart}
				>
					Начать игру заново
				</button>
			</div>
		);
	}
}

// Типизируем шаблон GameLayout

GameLayout.propTypes = {
	handleRestart: PropTypes.func,
};
