import './styles.css';
import { createStore } from './createStore';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer, 0);

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');
const counter = document.getElementById('counter');

store.subscribe(() => {
	const state = store.getState();
	counter.textContent = state;
});

store.subscribe(() => {
	const state = store.getState();
	console.log(state);
});

store.subscribe(() => {
	const state = store.getState();
	console.log(`this is state => ${state}`);
});

store.dispatch({ tyep: 'INIT_APLICATION' });

addBtn.addEventListener('click', () => {
	store.dispatch({ type: 'INCREMENT' });
});

subBtn.addEventListener('click', () => {
	store.dispatch({ type: 'DECREMENT' });
});

themeBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});

asyncBtn.addEventListener('click', () => {});
