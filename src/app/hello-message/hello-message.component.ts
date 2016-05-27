import {Component, OnInit, OnDestroy} from "@angular/core";
import {RxModel} from "../shared/rx.model";
import {Observable} from "rxjs/Observable";

@Component({
  moduleId: module.id,
  selector: 'app-hello-message',
  templateUrl: 'hello-message.component.html',
  styleUrls: ['hello-message.component.css']
})
export class HelloMessageComponent implements OnInit, OnDestroy {
  private helloMessage:Observable<string>;

  constructor(private model:RxModel) {
    this.helloMessage = model.helloMessage
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.model = null
  }

}
