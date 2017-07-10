/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { TasksListComponent } from './tasks-list.component';
import { TasksService } from './tasks.service';
import { Task } from './task';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TasksListActions } from './tasks-list.actions';
import { MockNgRedux, NgReduxTestingModule } from '@angular-redux/store/lib/testing';

describe('TasksListComponent', () => {

  const TASK_1: Task = {id: 'task-1', name: 'Buy milk', done: false, userId: 'user-1'};
  const TASK_2: Task = {id: 'task-2', name: 'Pay rent', done: true, userId: 'user-1'};

  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;
  let taskListDe: DebugElement;
  let taskListEl: HTMLElement;
  let tasksListActions: TasksListActions;
  let selectorStub;

  beforeEach(async(() => {
    MockNgRedux.reset();
    TestBed.configureTestingModule({
      imports:[NgReduxTestingModule],
      declarations: [
        TasksListComponent,
        TaskDetailComponent
      ],
      providers: [
        TasksListActions,
        {provide: TasksService, useClass: class {}},
        {provide: NgRedux, useClass: class {}}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;

    // TasksListActions from the root injector
    tasksListActions = fixture.debugElement.injector.get(TasksListActions);

    // Setup spy on the `getTasks` method
    spyOn(tasksListActions, 'getTasks');

    // query for the list-group by CSS element selector
    taskListDe = fixture.debugElement.query(By.css('div.list-group'));
    taskListEl = taskListDe.nativeElement;

    selectorStub = MockNgRedux.getSelectorStub(['tasksList', 'tasks']);
  });

  it('should display the list of tasks', () => {
    selectorStub.next([TASK_1, TASK_2]);
    fixture.detectChanges();

    let taskDetailDe = taskListDe.queryAll(By.css('app-task-detail'));
    expect(taskDetailDe.length).toBe(2);
    expect(taskDetailDe[0].nativeElement.textContent).toContain(TASK_1.name);
    expect(taskDetailDe[1].nativeElement.textContent).toContain(TASK_2.name);
  });

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
