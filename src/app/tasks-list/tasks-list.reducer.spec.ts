import { tasksListState, TasksListState } from './tasks-list.state';
import { tasksListReducer } from './tasks-list.reducer';
import {
  ADD_TASK_SUCCESS, REQUEST_TASKS_SUCCESS, DELETE_TASK_SUCCESS, TOGGLE_TASK_START,
  TOGGLE_TASK_SUCCESS
} from './tasks-list.actions';

describe('Task List Reducer', () => {

  it('should add new task to tasks list', () => {
    let state = {...tasksListState, tasks: [{}, {}]} as TasksListState;
    let action = {type: ADD_TASK_SUCCESS, task: {}};

    expect(tasksListReducer(state, action)).toEqual({...state, tasks: [{}, {}, {}]});
  });

  it('should add all tasks to tasks list', () => {
    let state = {...tasksListState, tasks: [], processing: true} as TasksListState;
    let action = {type: REQUEST_TASKS_SUCCESS, tasks: [{}, {}]};

    expect(tasksListReducer(state, action)).toEqual({...state, tasks: [{}, {}], processing: false});
  });

  it('should delete a task from the task list', () => {
    let state = {...tasksListState, tasks: [{id: '1'}, {id: '2'}, {id: '3'}], processing: true} as TasksListState;
    let action = {type: DELETE_TASK_SUCCESS, task: {id: '2'}};

    expect(tasksListReducer(state, action)).toEqual({...state, tasks: [{id: '1'}, {id: '3'}], processing: false});
  });

  it('should indicate toggling started', () => {
    let state = {...tasksListState, processing: false} as TasksListState;
    let action = {type: TOGGLE_TASK_START};

    expect(tasksListReducer(state, action)).toEqual({...state, processing: true});
  });

  it('should replace updated task and indicate toggling finished', () => {
    let state = {...tasksListState, processing: true, tasks: [{id: '1', done: false}, {id: '2'}]} as TasksListState;
    let action = {type: TOGGLE_TASK_SUCCESS, task: {id: '1', done: true}};

    expect(tasksListReducer(state, action)).toEqual({
      ...state,
      processing: false,
      tasks: [{id: '1', done: true}, {id: '2'}]
    });
  });

  it('should do nothing for unknown actions', () => {
    let action = {type: 'UNKNOWN_ACTION'};

    expect(tasksListReducer(tasksListState, action)).toEqual(tasksListState);
  });

});
