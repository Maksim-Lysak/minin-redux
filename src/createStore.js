export const createStore = (rootReducer, initialState) => {
	let state = rootReducer(initialState, { type: '__INIT__' });
	const subscribers = [];
	return {
		dispatch(action) {
			state = rootReducer(state, action);
			subscribers.forEach((sub) => sub());
		},
		getState() {
			return state;
		},
		subscribe(callback) {
			subscribers.push(callback);
		},
	};
};
