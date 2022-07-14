import './styles.css';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { init, increment, decrement, asyncIncrement } from './redux/actions';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';

// custom middleware
// const logger = (state) => {
// 	return (next) => {
// 		return (action) => {
// 			console.log('state', action);
// 			return next(action);
// 		};
// 	};
// };

const store = createStore(rootReducer, 0, applyMiddleware(thunk, logger));

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');
const counter = document.getElementById('counter');

store.subscribe(() => {
	const state = store.getState();
	counter.textContent = state;
});

store.dispatch(init());

addBtn.addEventListener('click', () => {
	store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
	store.dispatch(decrement());
});

themeBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});

asyncBtn.addEventListener('click', () => {
	store.dispatch(asyncIncrement());
});
