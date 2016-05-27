import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {RxModel} from "../shared/rx.model";

@Component({
  moduleId: module.id,
  selector: 'app-first-input',
  templateUrl: 'first-input.component.html',
  styleUrls: ['first-input.component.css']
})
export class FirstInputComponent implements OnInit {
  private first:Observable<string>;

  constructor(private model:RxModel) {
    this.first = model.first
  }

  ngOnInit() {
  }

  update(text:string) {
    this.model.first.next(text);
  }

}
