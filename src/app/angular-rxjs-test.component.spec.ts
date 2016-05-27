import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularRxjsTestAppComponent } from '../app/angular-rxjs-test.component';

beforeEachProviders(() => [AngularRxjsTestAppComponent]);

describe('App: AngularRxjsTest', () => {
  it('should create the app',
      inject([AngularRxjsTestAppComponent], (app: AngularRxjsTestAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-rxjs-test works!\'',
      inject([AngularRxjsTestAppComponent], (app: AngularRxjsTestAppComponent) => {
    expect(app.title).toEqual('angular-rxjs-test works!');
  }));
});
