import { INIT, INCREMENT, DECREMENT, ASYNC_INCREMENT } from './types';

export const rootReducer = (state, action) => {
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
