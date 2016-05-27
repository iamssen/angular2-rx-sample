import {Component, OnInit, OnDestroy} from "@angular/core";
import {RxModel} from "../shared/rx.model";
import {Observable} from "rxjs/Observable";

@Component({
  moduleId: module.id,
  selector: 'app-user-name',
  templateUrl: 'user-name.component.html',
  styleUrls: ['user-name.component.css']
})
export class UserNameComponent implements OnInit, OnDestroy {
  private userName:Observable<string>;
  
  constructor(private model:RxModel) {
    this.userName = model.userName.map(x => `#!@%%#@# ${x}`)
  }
  
  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.model = null
  }
  
}
