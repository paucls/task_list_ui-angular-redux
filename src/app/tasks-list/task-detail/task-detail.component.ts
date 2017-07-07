import { Component, Input } from '@angular/core';

import { Task } from '../task';
import { TasksListActions } from '../tasks-list.actions';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {

  @Input() task: Task;
  processing: boolean = false;

  constructor(private tasksListActions: TasksListActions) {}

  deleteTask(task: Task) {
    this.tasksListActions.deleteTask(task);
  }

  toggleTaskStatus(task: Task) {
    this.processing = true;

    task.done = !task.done;

  //   return this.tasksService
  //     .update(task)
  //     .then(() => this.processing = false);
  }

}
