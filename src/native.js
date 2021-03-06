import './styles.css';
import { createStore } from './createStore';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer, 0);

window.store = store;

const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');
const counter = document.getElementById('counter');

addBtn.addEventListener('click', () => {});

subBtn.addEventListener('click', () => {});

themeBtn.addEventListener('click', () => {
	document.body.classList.toggle('dark');
});

asyncBtn.addEventListener('click', () => {});
