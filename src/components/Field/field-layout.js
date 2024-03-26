// Компонент FieldLyaout

import { PLAYER, PLAYER_SIGN } from "../../constants";
import PropTypes from "prop-types";
import { Component } from "react";

export class FieldLayout extends Component {
	render() {
		const { field, handleCellClick } = this.props;
		return (
			<div className="grid grid-cols-3 my-5 mx-0 border border-black">
				{field.map((cellPlayer, index) => (
					<button
						key={index}
						className="bg-gray-100 w-24 h-24 border border-black text-blue-700 text-6xl font-extrabold decoration-solid"
						onClick={() => handleCellClick(index)}
					>
						{PLAYER_SIGN[cellPlayer]}
					</button> // вывод ячеек по индексу
				))}
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PLAYER))),
	handleCellClick: PropTypes.func,
};
