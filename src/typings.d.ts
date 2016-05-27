/// <reference path="../typings/browser.d.ts" />
declare var module: { id: string };

// FIXME export를 붙여놓으면 Typescript Compile Error가 발생됨
declare class Observable<T> {
  static combineLatest();
  static fromPromise(promise:Promise<any>);
}