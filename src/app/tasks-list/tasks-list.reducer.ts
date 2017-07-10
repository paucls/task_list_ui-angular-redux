import {
  ADD_TASK_SUCCESS, DELETE_TASK_SUCCESS, REQUEST_TASKS_SUCCESS, TOGGLE_TASK_START,
  TOGGLE_TASK_SUCCESS
} from './tasks-list.actions';
import { TasksListState, tasksListState } from './tasks-list.state';

export function tasksListReducer(state = tasksListState, action) : TasksListState {
  switch (action.type) {
    case ADD_TASK_SUCCESS:
      return {...state, tasks: [...state.tasks, action.task]};
    case REQUEST_TASKS_SUCCESS:
      return {
        ...state,
        processing: false,
        tasks: action.tasks
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        processing: false,
        tasks: state.tasks.filter(task => task.id !== action.task.id)
      };
    case TOGGLE_TASK_START:
      return {
        ...state,
        processing: true
      };
    case TOGGLE_TASK_SUCCESS:
      return {
        ...state,
        processing: false,
        tasks: state.tasks.map(task => {
          return task.id === action.task.id ? action.task : task;
        })
      };
    default:
      return state;
  }
}
