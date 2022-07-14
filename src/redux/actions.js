import { INIT, INCREMENT, DECREMENT, ASYNC_INCREMENT } from './types';

export const init = () => ({ type: INIT });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const asyncIncrement = () => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch({ type: ASYNC_INCREMENT });
		}, 2000);
	};
};
