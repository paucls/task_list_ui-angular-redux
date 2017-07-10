import { tasksListReducer as tasksList } from '../tasks-list/tasks-list.reducer';
import { combineReducers, Reducer } from 'redux';
import { IAppState } from './i-app-state';

export const rootReducer = combineReducers({tasksList}) as Reducer<IAppState>;
