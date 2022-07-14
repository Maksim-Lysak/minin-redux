import { INIT, INCREMENT, DECREMENT } from './types';

export const init = () => ({ type: INIT });
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
