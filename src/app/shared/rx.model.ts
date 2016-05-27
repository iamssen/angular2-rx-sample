import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";
import {ConnectableObservable} from "rxjs/Rx";
import {Subscription} from "rxjs/Subscription";

const fetch = param => new Promise(resolve => {
  setTimeout(() => {
    resolve(`Hello ${param.first} ${param.last}! Date is ${param.date}`)
  }, Math.random() * 1000)
})

@Injectable()
export class RxModel {
  private _date:BehaviorSubject<string>;
  private _first:BehaviorSubject<string>;
  private _last:BehaviorSubject<string>;
  private _paramsSubject:Subject<any>;
  private _params:ConnectableObservable<any>;
  private _userName:Observable<string>;
  private _currentDate:Observable<string>;
  private _helloMessageSubject:Subject<any>
  private _helloMessage:ConnectableObservable<any>;
  private _helloMessageConnect:Subscription;
  
  get date() {
    return this._date = this._date || new BehaviorSubject('2001-09-23')
  }
  
  get first() {
    return this._first = this._first || new BehaviorSubject('Ian')
  }
  
  get last() {
    return this._last = this._last || new BehaviorSubject('Kim')
  }
  
  get params() {
    if (!this._params) {
      this._paramsSubject = new Subject<any>()
      this._params = Observable
        .combineLatest(this.date, this.first, this.last)
        .debounceTime(200)
        .map(x => ({date: x[0], first: x[1], last: x[2]}))
        .do(x => console.log('!!!! do params', x))
        .multicast(this._paramsSubject)
      this._params.connect()
    }
    return this._params
  }
  
  get userName():Observable<string> {
    return this._userName = this._userName || this.params.map(x => `${x.first} ${x.last}`)
  }
  
  get currentDate():Observable<string> {
    return this._currentDate = this._currentDate || this.params.map(x => `${x.date}`)
  }
  
  get helloMessage():Observable<string> {
    if (!this._helloMessage) {
      this._helloMessageSubject = new Subject
      this._helloMessage = this._params.map(x => Observable.fromPromise(fetch(x)))
        .mergeAll()
        .debounceTime(100)
        .do(x => console.log('!!!! do helloMessage', x))
        .multicast(this._helloMessageSubject)
      this._helloMessageConnect = this._helloMessage.connect()
    }
    return this._helloMessage
  }

  destroy() {
    this._date.unsubscribe()
    this._first.unsubscribe()
    
    this._helloMessageSubject.unsubscribe()
    this._helloMessageConnect.unsubscribe()
    
    this._paramsSubject.unsubscribe()
    
    this._last.unsubscribe()
  }
}