import { IAppState } from './i-app-state';
import { ADD_TASK_SUCCESS, REQUEST_TASKS_SUCCESS } from '../tasks-list/tasks-list.actions';

const initialState: IAppState = {
  tasks: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_SUCCESS:
      return {...state, tasks: [...state.tasks, action.task]};
    case REQUEST_TASKS_SUCCESS:
      return {...state, tasks: action.tasks};
    default:
      return state;
  }
}
