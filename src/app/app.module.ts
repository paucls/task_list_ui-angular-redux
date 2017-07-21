import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

// used to create stub backend
import { stubBackendProvider } from './stub-backed/stub-backend-provider';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksListActions } from './tasks-list/tasks-list.actions';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailComponent } from './tasks-list/task-detail/task-detail.component';
import { TasksService } from './tasks-list/tasks.service';
import { rootReducer } from './store/root-reducer';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksListComponent,
    TaskDetailComponent
  ],
  providers: [
    TasksListActions,
    TasksService,
    // used to create stub backend
    stubBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>,
              devTools: DevToolsExtension) {
    let enhancers = [];

    if (!environment.production) {
      enhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];
    }

    ngRedux.configureStore(rootReducer, {}, [], enhancers);
  }
}
