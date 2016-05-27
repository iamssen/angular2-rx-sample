import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {RxModel} from "../shared/rx.model";

@Component({
  moduleId: module.id,
  selector: 'app-date-input',
  templateUrl: 'date-input.component.html',
  styleUrls: ['date-input.component.css']
})
export class DateInputComponent implements OnInit {
  private date:Observable<string>;

  constructor(private model:RxModel) {
    this.date = model.date
  }

  ngOnInit() {
  }

  update(text:string) {
    this.model.date.next(text);
  }

}
