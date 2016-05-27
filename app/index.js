System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/last-input/last-input.component.js",["@angular/core","../shared/rx.model"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../shared/rx.model"),h=function(){function a(a){this.model=a,this.last=a.last}return a.prototype.ngOnInit=function(){},a.prototype.update=function(a){this.model.last.next(a)},a=d([f.Component({moduleId:c.id,selector:"app-last-input",templateUrl:"last-input.component.html",styleUrls:["last-input.component.css"]}),e("design:paramtypes",[g.RxModel])],a)}();return b.LastInputComponent=h,c.exports}),System.registerDynamic("app/last-input/index.js",["./last-input.component"],!0,function(a,b,c){"use strict";var d=a("./last-input.component");return b.LastInputComponent=d.LastInputComponent,c.exports}),System.registerDynamic("app/first-input/first-input.component.js",["@angular/core","../shared/rx.model"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../shared/rx.model"),h=function(){function a(a){this.model=a,this.first=a.first}return a.prototype.ngOnInit=function(){},a.prototype.update=function(a){this.model.first.next(a)},a=d([f.Component({moduleId:c.id,selector:"app-first-input",templateUrl:"first-input.component.html",styleUrls:["first-input.component.css"]}),e("design:paramtypes",[g.RxModel])],a)}();return b.FirstInputComponent=h,c.exports}),System.registerDynamic("app/first-input/index.js",["./first-input.component"],!0,function(a,b,c){"use strict";var d=a("./first-input.component");return b.FirstInputComponent=d.FirstInputComponent,c.exports}),System.registerDynamic("app/date-input/date-input.component.js",["@angular/core","../shared/rx.model"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../shared/rx.model"),h=function(){function a(a){this.model=a,this.date=a.date}return a.prototype.ngOnInit=function(){},a.prototype.update=function(a){this.model.date.next(a)},a=d([f.Component({moduleId:c.id,selector:"app-date-input",templateUrl:"date-input.component.html",styleUrls:["date-input.component.css"]}),e("design:paramtypes",[g.RxModel])],a)}();return b.DateInputComponent=h,c.exports}),System.registerDynamic("app/date-input/index.js",["./date-input.component"],!0,function(a,b,c){"use strict";var d=a("./date-input.component");return b.DateInputComponent=d.DateInputComponent,c.exports}),System.registerDynamic("app/shared/index.js",["./rx.model"],!0,function(a,b,c){"use strict";var d=a("./rx.model");return b.RxModel=d.RxModel,c.exports}),System.registerDynamic("app/user-name/user-name.component.js",["@angular/core","../shared/rx.model"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../shared/rx.model"),h=function(){function a(a){this.model=a,this.userName=a.userName.map(function(a){return"#!@%%#@# "+a})}return a.prototype.ngOnInit=function(){},a.prototype.ngOnDestroy=function(){this.model=null},a=d([f.Component({moduleId:c.id,selector:"app-user-name",templateUrl:"user-name.component.html",styleUrls:["user-name.component.css"]}),e("design:paramtypes",[g.RxModel])],a)}();return b.UserNameComponent=h,c.exports}),System.registerDynamic("app/user-name/index.js",["./user-name.component"],!0,function(a,b,c){"use strict";var d=a("./user-name.component");return b.UserNameComponent=d.UserNameComponent,c.exports}),System.registerDynamic("app/current-date/current-date.component.js",["@angular/core","../shared/rx.model"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../shared/rx.model"),h=function(){function a(a){this.model=a,this.currentDate=a.currentDate}return a.prototype.ngOnInit=function(){},a.prototype.ngOnDestroy=function(){this.model=null},a=d([f.Component({moduleId:c.id,selector:"app-current-date",templateUrl:"current-date.component.html",styleUrls:["current-date.component.css"]}),e("design:paramtypes",[g.RxModel])],a)}();return b.CurrentDateComponent=h,c.exports}),System.registerDynamic("app/current-date/index.js",["./current-date.component"],!0,function(a,b,c){"use strict";var d=a("./current-date.component");return b.CurrentDateComponent=d.CurrentDateComponent,c.exports}),System.registerDynamic("app/shared/rx.model.js",["@angular/core","rxjs/Observable","rxjs/BehaviorSubject","rxjs/Subject"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("rxjs/Observable"),h=a("rxjs/BehaviorSubject"),i=a("rxjs/Subject"),j=function(a){return new Promise(function(b){setTimeout(function(){b("Hello "+a.first+" "+a.last+"! Date is "+a.date)},1e3*Math.random())})},k=function(){function a(){}return Object.defineProperty(a.prototype,"date",{get:function(){return this._date=this._date||new h.BehaviorSubject("2001-09-23")},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"first",{get:function(){return this._first=this._first||new h.BehaviorSubject("Ian")},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"last",{get:function(){return this._last=this._last||new h.BehaviorSubject("Kim")},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"params",{get:function(){return this._params||(this._paramsSubject=new i.Subject,this._params=g.Observable.combineLatest(this.date,this.first,this.last).debounceTime(200).map(function(a){return{date:a[0],first:a[1],last:a[2]}})["do"](function(a){return console.log("!!!! do params",a)}).multicast(this._paramsSubject),this._params.connect()),this._params},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"userName",{get:function(){return this._userName=this._userName||this.params.map(function(a){return a.first+" "+a.last})},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"currentDate",{get:function(){return this._currentDate=this._currentDate||this.params.map(function(a){return""+a.date})},enumerable:!0,configurable:!0}),Object.defineProperty(a.prototype,"helloMessage",{get:function(){return this._helloMessage||(this._helloMessageSubject=new i.Subject,this._helloMessage=this._params.map(function(a){return g.Observable.fromPromise(j(a))}).mergeAll().debounceTime(100)["do"](function(a){return console.log("!!!! do helloMessage",a)}).multicast(this._helloMessageSubject),this._helloMessageConnect=this._helloMessage.connect()),this._helloMessage},enumerable:!0,configurable:!0}),a.prototype.destroy=function(){this._date.unsubscribe(),this._first.unsubscribe(),this._helloMessageSubject.unsubscribe(),this._helloMessageConnect.unsubscribe(),this._paramsSubject.unsubscribe(),this._last.unsubscribe()},a=d([f.Injectable(),e("design:paramtypes",[])],a)}();return b.RxModel=k,c.exports}),System.registerDynamic("app/hello-message/hello-message.component.js",["@angular/core","../shared/rx.model"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("../shared/rx.model"),h=function(){function a(a){this.model=a,this.helloMessage=a.helloMessage}return a.prototype.ngOnInit=function(){},a.prototype.ngOnDestroy=function(){this.model=null},a=d([f.Component({moduleId:c.id,selector:"app-hello-message",templateUrl:"hello-message.component.html",styleUrls:["hello-message.component.css"]}),e("design:paramtypes",[g.RxModel])],a)}();return b.HelloMessageComponent=h,c.exports}),System.registerDynamic("app/hello-message/index.js",["./hello-message.component"],!0,function(a,b,c){"use strict";var d=a("./hello-message.component");return b.HelloMessageComponent=d.HelloMessageComponent,c.exports}),System.registerDynamic("app/angular-rxjs-test.component.js",["@angular/core","./last-input","./first-input","./date-input","./shared","./user-name","./current-date","./hello-message"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("./last-input"),h=a("./first-input"),i=a("./date-input"),j=a("./shared"),k=a("./user-name"),l=a("./current-date"),m=a("./hello-message"),n=function(){function a(a){this.model=a,this.title="angular-rxjs-test works!",console.log("angular-rxjs-test.component.ts..constructor()",a)}return a.prototype.ngOnDestroy=function(){this.model.destroy(),this.model=null},a=d([f.Component({moduleId:c.id,selector:"angular-rxjs-test-app",templateUrl:"angular-rxjs-test.component.html",styleUrls:["angular-rxjs-test.component.css"],providers:[j.RxModel],directives:[g.LastInputComponent,h.FirstInputComponent,i.DateInputComponent,k.UserNameComponent,l.CurrentDateComponent,m.HelloMessageComponent]}),e("design:paramtypes",[j.RxModel])],a)}();return b.AngularRxjsTestAppComponent=n,c.exports}),System.registerDynamic("app/index.js",["./environment","./angular-rxjs-test.component"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}return d(a("./environment")),d(a("./angular-rxjs-test.component")),c.exports});