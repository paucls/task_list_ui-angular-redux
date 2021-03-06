import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Task } from 'app/tasks-list/task';
import { TasksService } from './tasks.service';
import { IAppState } from '../store/i-app-state';

export const ADD_TASK_SUCCESS = 'tasks-list/ADD_TASK_SUCCESS';
export const DELETE_TASK_SUCCESS = 'tasks-list/DELETE_TASK_SUCCESS';
export const TOGGLE_TASK_SUCCESS = 'tasks-list/TOGGLE_TASK_SUCCESS';
export const TOGGLE_TASK_START = 'tasks-list/TOGGLE_TASK_START';
export const REQUEST_TASKS_SUCCESS = 'tasks-list/REQUEST_TASKS_SUCCESS';

@Injectable()
export class TasksListActions {

  constructor(private ngRedux: NgRedux<IAppState>, private tasksService: TasksService) {
  }

  getTasks() {
    this.tasksService.getAll()
      .then(tasks => this.ngRedux.dispatch({
        type: REQUEST_TASKS_SUCCESS,
        tasks
      }));
  }

  addTask(name: string) {
    let newTask: Task = {name: name};

    return this.tasksService
      .save(newTask)
      .then(task => this.ngRedux.dispatch({
        type: ADD_TASK_SUCCESS,
        task
      }));
  }

  deleteTask(task: Task) {
    this.ngRedux.dispatch({
      type: DELETE_TASK_SUCCESS,
      task
    });
  }

  toggleTaskStatus(task: Task) {
    const toggledTask = {...task, done: !task.done};

    this.ngRedux.dispatch({
      type: TOGGLE_TASK_START,
      task: toggledTask
    });

    return this.tasksService
      .update(toggledTask)
      .then(task => this.ngRedux.dispatch({
        type: TOGGLE_TASK_SUCCESS,
        task: toggledTask
      }));
  }
}
