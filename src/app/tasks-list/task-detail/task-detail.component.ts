import { Component, Input } from '@angular/core';

import { Task } from '../task';
import { TasksListActions } from '../tasks-list.actions';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent {

  @Input() task: Task;

  @select(['tasksList', 'processing']) processing$: Observable<boolean>;

  constructor(private tasksListActions: TasksListActions) {}

  deleteTask(task: Task) {
    this.tasksListActions.deleteTask(task);
  }

  toggleTaskStatus(task: Task) {
    this.tasksListActions.toggleTaskStatus(task);
  }

}
