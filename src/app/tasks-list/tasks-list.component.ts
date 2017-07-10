import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Task } from './task';
import { TasksListActions } from './tasks-list.actions';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  @select(['tasksList', 'tasks']) tasks$: Observable<Task>;

  constructor(private tasksListActions: TasksListActions) {
  }

  ngOnInit() {
    this.tasksListActions.getTasks();
  }

  addTask(name: string) {
    if (!name.trim()) {
      return;
    }

    this.tasksListActions.addTask(name);
  }

}
