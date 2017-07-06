import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { IAppState } from '../store/i-app-state';
import { Task } from './task';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TasksListActions } from './tasks-list.actions';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
  providers: [TasksService]
})
export class TasksListComponent implements OnInit {

  @select('tasks') tasks$: Observable<Task>;

  constructor(private ngRedux: NgRedux<IAppState>, private tasksListActions: TasksListActions) {
  }

  ngOnInit() {
    this.tasksListActions.getTasks();
  }

  addTask(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }

    this.tasksListActions.addTask(name);
  }

  // addTask(name: string): Promise<number> {
  //   name = name.trim();
  //   if (!name) {
  //     return;
  //   }
  //
  //   let newTask: Task = {name: name};
  //
  //   return this.tasksService
  //     .save(newTask)
  //     .then(task => this.tasks.push(task));
  // }
  //
  // deleteTask(deletedTask: Task) {
  //   this.tasks = this.tasks.filter(task => task.id !== deletedTask.id);
  // }

}
