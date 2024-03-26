// Game крестики нолики c React Redux, классовые компоненты (10. Epilog)

import { connect /*useDispatch*/ } from "react-redux"; // импортируем хук для доступа к диспатч
import { GameLayout } from "./game-layout";
import { RESTART_GAME } from "./actions";
import { Component } from "react";
import PropTypes from "prop-types";

export class GameContainer extends Component {
	render() {
		return <GameLayout handleRestart={this.props.handleRestart} />;
	}
}

// функция для диспатч
const mapDispathToProps = (dispatch) => ({
	handleRestart: () => dispatch(RESTART_GAME),
});

export const Game = connect(null, mapDispathToProps)(GameContainer); // подключаем через connect Redux

GameContainer.propTypes = {
	handleRestart: PropTypes.func.isRequired,
};
