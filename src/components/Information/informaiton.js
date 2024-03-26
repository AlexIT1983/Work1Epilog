// Наш компонент Information с connect
//
import { PLAYER_ACTION, PLAYER_NAME, STATUS, PLAYER } from "../../constants";
import { connect /*useSelector*/ } from "react-redux";
import { InformationLayout } from "./information-layout";
import { Component } from "react";
import PropTypes from "prop-types";

export class InformationContainer extends Component {
	// const status = useSelector((state) => state.status);
	// const currentPlayer = useSelector((state) => state.currentPlayer);
	render() {
		const { status, currentPlayer } = this.props; // берем пропсы

		const playerAction = PLAYER_ACTION[status]; // выбираем действие
		const playerName = PLAYER_NAME[currentPlayer]; // выбираем текущего игрока

		const information =
			status === STATUS.DRAW ? "Ничья" : `${playerAction}: ${playerName}`;

		return <InformationLayout information={information} />;
	}
}

// подключаем пропсы
const mapStateToProps = (state) => ({
	status: state.status,
	currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer); // подключаем через connect Redux

// типизация наших переменных
InformationContainer.propTypes = {
	status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
	currentPlayer: PropTypes.oneOf(Object.values(PLAYER)).isRequired,
};
