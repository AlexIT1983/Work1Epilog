// Наш reducer for Redux

import { STATUS, PLAYER } from "./constants";
import { createEmptyField } from "./utils";
import { ACTION_TYPE } from "./actions";

// задаем начальное состояние
const initialState = {
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSSES,
	field: createEmptyField(),
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPE.SET_CURRENT_PLAYER:
			return {
				...state,
				currentPlayer: payload,
			};
		case ACTION_TYPE.SET_FIELD:
			return {
				...state,
				field: payload,
			};
		case ACTION_TYPE.SET_STATUS:
			return {
				...state,
				status: payload,
			};
		case ACTION_TYPE.RESTART_GAME:
			return initialState;

		default:
			return state; // если прилетели непонятные состояние, вернуть старое
	}
};
