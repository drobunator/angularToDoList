import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {delay} from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';
import {ConfirmService} from './services/confirm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  modalAlertClose = false;
  searchInputValue = '';
  sortValue: string;
  sortKey: string;
  tasks: any[] = [];
  loading = false;
  emptyTitle = 'todo list is empty';

  constructor(
    public data: DataService,
    public confirm: ConfirmService
  ) {}


  ngOnInit(): void {
    this.loading = true;
    this.data.tasks
      .subscribe(resp => {
        this.tasks = resp;
        this.loading = false;
      });
  }
}
