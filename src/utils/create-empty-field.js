// Функция создания пустого поля

import { PLAYER } from '../constants';

export const createEmptyField = () => {
	return new Array(9).fill(PLAYER.NOBODY);
};
