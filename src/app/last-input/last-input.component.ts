import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {RxModel} from "../shared/rx.model";

@Component({
  moduleId: module.id,
  selector: 'app-last-input',
  templateUrl: 'last-input.component.html',
  styleUrls: ['last-input.component.css']
})
export class LastInputComponent implements OnInit {
  private last:Observable<string>;

  constructor(private model:RxModel) {
    this.last = model.last
  }

  ngOnInit() {
  }

  update(text:string) {
    this.model.last.next(text);
  }

}
