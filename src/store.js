// Создаем наш Redux store

import { createStore } from "redux"; // импортриуем функцию
import { appReducer } from "./reducer";

export const store = createStore(appReducer);
