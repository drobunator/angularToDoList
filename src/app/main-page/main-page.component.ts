import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConfirmService} from '../services/confirm.service';
import {DataService} from '../services/data.service';
import {Subscriber} from 'rxjs';
import {Task} from '../services/api.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  modalAlertClose = false;
  searchInputValue = '';
  sortValue = 'max';
  sortKey = 'date';
  tasks: Task[] = [];
  loading = false;
  emptyTitle = 'todo list is empty';
  sub: any;

  constructor(
    public data: DataService,
    public confirm: ConfirmService
  ) {
  }

  ngOnInit(): void {
   this.loading = true;
   this.sub = this.data.tasks
      .subscribe(resp => {
        this.tasks = resp;
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
