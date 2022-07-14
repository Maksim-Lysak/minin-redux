import { INIT, INCREMENT, DECREMENT } from './types';

export const rootReducer = (state, action) => {
	if (action.type === INIT) {
		return state;
	} else if (action.type === INCREMENT) {
		return state + 1;
	} else if (action.type === DECREMENT) {
		return state - 1;
	}
	return state;
};
