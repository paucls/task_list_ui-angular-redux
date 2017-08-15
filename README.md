# Task List UI - Angular + Redux
[![Build Status](https://travis-ci.org/paucls/task_list_ui-angular-redux.svg?branch=master)](https://travis-ci.org/paucls/task_list_ui-angular-redux)

A Tasks List web app for a [Task List REST API service](https://github.com/paucls/task_list_api-spring_boot).

This is a simple pet project application that shows how to implement Angular 4 + Redux apps with unit tests, e2e tests against 
a stub backend, configuration for deployment in Heroku, etc.

This project was scaffolded with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Demo
https://paucls-task-list-ui-redux.herokuapp.com/
![Demo](app-demo.gif)

## Version History
- 2.1.0 - Configured middlewares on Redux store: DevToolsExtension, ReduxLog and ReduxImmutableStateInvariant.
- 2.0.0 - Rewrite app using Redux architecture (a fork project of https://github.com/paucls/task_list_ui-angular).
- 1.1.0 - Added code coverage to unit tests.
- 1.0.1 - Updated Angular to version 4.1.2, it fixes bug with MockBackend and the production build. Using again build with AOT.
- 1.0.0 - Updated Angular to version 4.0.0 as part of updating to Angular CLI 1.0.0. (As drawback this versions disables aot on production build, this is related to bug with Angular 4 and MockService https://github.com/angular/angular/issues/15521).
- 0.0.0 - Implemented completely the project, used Angular 2 and Angular CLI 1.0.0-beta.20-4.

## Documentation
Links to some of the articles and documentation used to implement this project:

Deploy to Heroku
- https://paucls.wordpress.com/2016/11/25/deploy-angular-2-cli-app-to-heroku/
- https://github.com/angular/angular-cli/issues/2517

Setup Travis CI
- http://blog.500tech.com/setting-up-travis-ci-to-run-tests-on-latest-google-chrome-version/
- http://mseemann.io/frontend/2016/05/31/setup-angular-2-app-part-1.html

Unit Tests
- https://paucls.wordpress.com/2016/11/30/unit-test-http-services-on-angular-2
- http://gist.asciidoctor.org/?github-mraible%2Fng2-demo%2F%2FREADME.adoc#_testing
- https://angular.io/docs/ts/latest/guide/testing.html#!#component-with-input-output

Stub backend and E2E Tests
- http://jasonwatmore.com/post/2016/11/24/angular-2-mockbackend-example-for-backendless-development

Angular 2 Tutorial
- https://angular.io/docs/ts/latest/tutorial/toh-pt6.html

Angular + Redux
- https://redux-observable.js.org/
- https://angular-redux.github.io/store/
- https://app.pluralsight.com/library/courses/angular-2-redux-manage-state/table-of-contents
- https://github.com/evgenyrodionov/redux-logger
