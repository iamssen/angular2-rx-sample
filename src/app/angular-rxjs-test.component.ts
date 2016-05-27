import {Component, OnDestroy} from '@angular/core';
import {LastInputComponent} from "./last-input";
import {FirstInputComponent} from './first-input'
import {DateInputComponent} from './date-input'
import {RxModel} from './shared'
import {UserNameComponent} from "./user-name";
import {CurrentDateComponent} from "./current-date";
import {HelloMessageComponent} from "./hello-message";

@Component({
  moduleId: module.id,
  selector: 'angular-rxjs-test-app',
  templateUrl: 'angular-rxjs-test.component.html',
  styleUrls: ['angular-rxjs-test.component.css'],
  providers: [
    RxModel
  ],
  directives: [
    LastInputComponent,
    FirstInputComponent,
    DateInputComponent,
    UserNameComponent,
    CurrentDateComponent,
    HelloMessageComponent
  ]
})
export class AngularRxjsTestAppComponent implements OnDestroy {
  title = 'angular-rxjs-test works!';
  
  constructor(private model: RxModel) {
    console.log('angular-rxjs-test.component.ts..constructor()', model);
  }

  ngOnDestroy() {
    this.model.destroy()
    this.model = null
  }
}
