import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskDetailComponent } from './task-detail.component';
import { Task } from '../task';
import { TasksService } from '../tasks.service';
import { TasksListActions } from '../tasks-list.actions';
import { NgRedux } from '@angular-redux/store';
import { MockNgRedux, NgReduxTestingModule } from '@angular-redux/store/lib/testing';

describe('TaskDetailComponent', () => {

  const TASK: Task = {id: 'task-1', name: 'Buy milk', done: false, userId: 'user-1'};

  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;
  let taskDetailDe: DebugElement;
  let taskDetailEl: HTMLElement;
  let tasksListActions: TasksListActions;
  let selectorStub;

  beforeEach(async(() => {
    MockNgRedux.reset();

    TestBed.configureTestingModule({
      imports: [NgReduxTestingModule],
      declarations: [TaskDetailComponent],
      providers: [
        TasksListActions,
        {provide: TasksService, useClass: class {}},
        {provide: NgRedux, useClass: class {}}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;

    // TasksListActions from the root injector
    tasksListActions = fixture.debugElement.injector.get(TasksListActions);

    // query for the list element by CSS element selector
    taskDetailDe = fixture.debugElement.query(By.css('.list-group-item'));
    taskDetailEl = taskDetailDe.nativeElement;

    component.task = TASK;

    selectorStub = MockNgRedux.getSelectorStub('processing');

    fixture.detectChanges();
  });

  it('should display task name', () => {
    expect(taskDetailEl.textContent).toContain(TASK.name);
  });

  it('should display check icon when task is done', () => {
    component.task.done = true;
    fixture.detectChanges();

    let isCheckIconPresent = taskDetailDe.queryAll(By.css('.task-check > .fa-check-square-o')).length > 0;
    expect(isCheckIconPresent).toBe(true);
  });

  it('should not display check icon when task is not done', () => {
    component.task.done = false;
    fixture.detectChanges();

    let isOkIconPresent = taskDetailDe.queryAll(By.css('.task-check > .fa-check-square-o')).length > 0;
    expect(isOkIconPresent).toBe(false);
  });

  it('should display unchecked icon when task is not done', () => {
    component.task.done = false;
    fixture.detectChanges();

    let isUncheckedIconPresent = taskDetailDe.queryAll(By.css('.task-check > .fa-square-o')).length > 0;
    expect(isUncheckedIconPresent).toBe(true);
  });

  it('should not display unchecked icon when task is done', () => {
    component.task.done = true;
    fixture.detectChanges();

    let isUncheckedIconPresent = taskDetailDe.queryAll(By.css('.task-check > .fa-square-o')).length > 0;
    expect(isUncheckedIconPresent).toBe(false);
  });

  it('should not display processing spinner by default', () => {
    selectorStub.next(false);
    fixture.detectChanges();

    let isSpinnerPresent = taskDetailEl.querySelector('.fa-spinner');
    expect(isSpinnerPresent).toBeFalsy();
  });

  it('should display processing spinner when processing true on state', async(() => {
    selectorStub.next(true);
    fixture.detectChanges();

    let isSpinnerPresent = taskDetailEl.querySelector('.fa-spinner');
    expect(isSpinnerPresent).toBeTruthy();
  }));

  describe('deleteTask()', () => {

    beforeEach(() => {
      spyOn(tasksListActions, 'deleteTask');
    });

    it('should dispatch the delete task action', () => {
      component.deleteTask(TASK);

      expect(tasksListActions.deleteTask).toHaveBeenCalledWith(TASK);
    });

  });

  describe('toggleTaskStatus()', () => {

    beforeEach(() => {
      spyOn(tasksListActions, 'toggleTaskStatus');
    });

    it('should dispatch the toggle task action', () => {
      let task: Task = {name: 'Task', done: false};

      component.toggleTaskStatus(task);

      expect(tasksListActions.toggleTaskStatus).toHaveBeenCalledWith(task);
    });

  });

});
