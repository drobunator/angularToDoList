import {Component, OnInit} from '@angular/core';
import {ConfirmService} from './services/confirm.service';
import {DataService} from './services/data.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
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
