import {
	INIT,
	INCREMENT,
	DECREMENT,
	ASYNC_INCREMENT,
	CHANGE_THEME,
	ENABLE_BUTTONS,
	DISABLE_BUTTONS,
} from './types';

export const init = () => ({ type: INIT });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const asyncIncrement = () => {
	return (dispatch) => {
		dispatch(disableButtons());
		setTimeout(() => {
			dispatch({ type: ASYNC_INCREMENT });
			dispatch(enableButtons());
		}, 2000);
	};
};

export const chatngeTheme = (payload) => ({ type: CHANGE_THEME, payload });

export const enableButtons = () => ({ type: ENABLE_BUTTONS });
export const disableButtons = () => ({ type: DISABLE_BUTTONS });
