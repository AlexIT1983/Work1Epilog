// Функция проверки пустых ячеек

import { PLAYER } from '../constants';

export const checkEmptyCell = (field) => {
	return field.some((cellPlayer) => cellPlayer === PLAYER.NOBODY);
};
