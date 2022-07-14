import {
	INIT,
	INCREMENT,
	DECREMENT,
	ASYNC_INCREMENT,
	CHANGE_THEME,
} from './types';
import { combineReducers } from 'redux';

export const counterReducer = (state = 0, action) => {
	if (action.type === INIT) {
		return state;
	} else if (action.type === INCREMENT) {
		return state + 1;
	} else if (action.type === DECREMENT) {
		return state - 1;
	} else if (action.type === ASYNC_INCREMENT) {
		return state + 100;
	}
	return state;
};

const initialThemeState = {
	value: 'light',
};

export const themeReducer = (state = initialThemeState, action) => {
	switch (action.type) {
		case CHANGE_THEME:
			return { ...state, value: action.payload };
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
});
