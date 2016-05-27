import {Component, OnInit, OnDestroy} from "@angular/core";
import {RxModel} from "../shared/rx.model";
import {Observable} from "rxjs/Observable";

@Component({
  moduleId: module.id,
  selector: 'app-current-date',
  templateUrl: 'current-date.component.html',
  styleUrls: ['current-date.component.css']
})
export class CurrentDateComponent implements OnInit, OnDestroy {
  private currentDate:Observable<string>;

  constructor(private model:RxModel) {
    this.currentDate = model.currentDate
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.model = null
  }

}
