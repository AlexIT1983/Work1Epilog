// Функция проверки поля на победу

import { WIN_PATTERNS } from '../constants';

export const checkWin = (field, currentPlayer) =>
	WIN_PATTERNS.some(
		(winPattern) =>
			winPattern.every((cellIndex) => field[cellIndex] === currentPlayer), // проверяем поле на соответсвие индексам выигрыша
	);
