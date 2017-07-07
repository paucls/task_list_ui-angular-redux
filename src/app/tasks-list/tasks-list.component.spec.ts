/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { TasksListComponent } from './tasks-list.component';
import { TasksService } from './tasks.service';
import { Task } from './task';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksListActions } from './tasks-list.actions';

describe('TasksListComponent', () => {

  const TASK_1: Task = {id: 'task-1', name: 'Buy milk', done: false, userId: 'user-1'};
  const TASK_2: Task = {id: 'task-2', name: 'Pay rent', done: true, userId: 'user-1'};

  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;
  let taskListDe: DebugElement;
  let taskListEl: HTMLElement;
  let tasksListActions: TasksListActions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TasksListComponent,
        TaskDetailComponent
      ],
      providers: [
        TasksListActions,
        {provide: TasksService, useClass: class TasksServiceStub {}},
        {provide: NgRedux, useClass: class NgReduxStub {}}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;

    // TasksListActions from the root injector
    tasksListActions = fixture.debugElement.injector.get(TasksListActions);

    // Setup spy on the `getAll` method
    // spyOn(tasksListActions, 'getAll').and.returnValue(Promise.resolve([TASK_1, TASK_2]));

    // query for the list-group by CSS element selector
    taskListDe = fixture.debugElement.query(By.css('div.list-group'));
    taskListEl = taskListDe.nativeElement;
  });

  // it('should display the list of tasks', fakeAsync(() => {
  //   fixture.detectChanges();
  //   tick(); // wait for async getAll
  //   fixture.detectChanges(); // update view with tasks
  //
  //   let taskDetailDe = taskListDe.queryAll(By.css('app-task-detail'));
  //   expect(tasksListActions.getTasks).toHaveBeenCalled();
  //   expect(taskDetailDe.length).toBe(2);
  //   expect(taskDetailDe[0].nativeElement.textContent).toContain(TASK_1.name);
  //   expect(taskDetailDe[1].nativeElement.textContent).toContain(TASK_2.name);
  // }));

  describe('addTask()', () => {

    let taskName = 'Task Name';

    it('should dispatch save task action', () => {
      spyOn(tasksListActions, 'addTask');

      component.addTask(taskName);

      expect(tasksListActions.addTask).toHaveBeenCalledWith(taskName);
    });

    it('should do nothing if task name is blank', () => {
      spyOn(tasksListActions, 'addTask');

      component.addTask(' ');

      expect(tasksListActions.addTask).not.toHaveBeenCalled();
    });

  });

});
