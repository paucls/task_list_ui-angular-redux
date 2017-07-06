import { IAppState } from './i-app-state';
import { ADD_TASK_SUCCESS, REQUEST_TASKS_SUCCESS } from '../tasks-list/tasks-list.actions';

const initialState: IAppState = {
  tasks: []
};

function storeTask(state, action): IAppState {
  return Object.assign({}, state, {
    tasks: state.tasks.concat(action.task)
  })
}

function storeTasks(state, action): IAppState {
  return Object.assign({}, state, {
    tasks: action.tasks
  })
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_SUCCESS:
      return storeTask(state, action);
    case REQUEST_TASKS_SUCCESS:
      return storeTasks(state, action);
    default:
      return state;
  }
}
