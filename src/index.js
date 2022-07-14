import './styles.css';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {
	init,
	increment,
	decrement,
	asyncIncrement,
	chatngeTheme,
} from './redux/actions';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './redux/rootReducer';

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, logger),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');
const counter = document.getElementById('counter');

store.subscribe(() => {
	const state = store.getState();
	counter.textContent = state.counter;
	document.body.classList.toggle(state.theme.value);
	[addBtn, subBtn, asyncBtn, themeBtn].forEach(
		(item) => (item.disabled = state.theme.disabled)
	);
});

store.dispatch(init());

addBtn.addEventListener('click', () => {
	store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
	store.dispatch(decrement());
});

themeBtn.addEventListener('click', () => {
	const theme = document.body.classList.contains('light') ? 'dark' : 'light';
	store.dispatch(chatngeTheme(theme));
});

asyncBtn.addEventListener('click', () => {
	store.dispatch(asyncIncrement());
});
