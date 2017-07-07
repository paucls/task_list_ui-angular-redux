/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let appEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent]
    });

    fixture = TestBed.createComponent(AppComponent);

    // query for the app component element
    appEl = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should have a navbar', () => {
    expect(appEl.querySelector('app-navbar')).toBeTruthy();
  });

  it('should have a taks list', () => {
    expect(appEl.querySelector('app-tasks-list')).toBeTruthy();
  });

});
