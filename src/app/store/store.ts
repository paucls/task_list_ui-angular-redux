import { createStore } from 'redux';
import { IAppState } from './i-app-state';
import { reducer } from './reducer';

export const store = createStore<IAppState>(reducer);
