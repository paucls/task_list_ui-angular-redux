import { tasksListReducer as tasksList } from '../tasks-list/tasks-list.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ tasksList });
