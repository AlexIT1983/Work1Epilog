// Наш компонент Field c connect

import { FieldLayout } from "./field-layout";
import { PLAYER, STATUS } from "../../constants";
import { connect /*useSelector, useDispatch*/ } from "react-redux";
import { checkEmptyCell, checkWin } from "../../utils";
import { setCurrentPlayer, setField, setStatus } from "../../actions";
import { Component } from "react";
import PropTypes from "prop-types";

// в нашем компоненте мы будем принимать пропсы(props)
export class FieldContainer extends Component {
	constructor(props) {
		super(props);

		this.handleCellClick = this.handleCellClick.bind(this);
	}

	handleCellClick(cellIndex) {
		const { status, field, currentPlayer, dispatch } = this.props;

		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) {
			return; // проверяем условие доступности игры и наличие ячеек и ничью
		}
		const newField = [...field]; // подготовим новое поле через спред оператор

		newField[cellIndex] = currentPlayer;

		dispatch(setField(newField));

		// проверяем условие для победы
		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN));
		} else if (checkEmptyCell(newField)) {
			const newCurrentPlayer =
				currentPlayer === PLAYER.CROSSES
					? PLAYER.NOUGHTS
					: PLAYER.CROSSES;

			dispatch(setCurrentPlayer(newCurrentPlayer));
		} // проверяем и сменяем игрока на другого
		else {
			dispatch(setStatus(STATUS.DRAW));
			// setStatus(STATUS.DRAW);
		}
	}

	render() {
		const { field } = this.props;

		return (
			<FieldLayout field={field} handleCellClick={this.handleCellClick} />
		);
	}
}

// подключаем пропсы
const mapStateToProps = (state) => ({
	status: state.status,
	currentPlayer: state.currentPlayer,
	field: state.field,
});

export const Field = connect(mapStateToProps)(FieldContainer); // подключаем через connect Redux

// типизация наших переменных
FieldContainer.propsTypes = {
	status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
	currentPlayer: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
	field: PropTypes.arrayOf(PropTypes.oneOf(Object.values(PLAYER))).isRequired,
	dispatch: PropTypes.func.isRequired,
};
