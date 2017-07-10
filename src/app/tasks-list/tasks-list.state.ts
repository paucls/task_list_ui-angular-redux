import { Task } from 'app/tasks-list/task';

export const tasksListState: TasksListState = {
  tasks: [],
  processing: false
};

export interface TasksListState {
  tasks: Task[],
  processing: boolean
}
