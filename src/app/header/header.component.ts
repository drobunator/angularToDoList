import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from '../services/api.service';

export interface Task {
  id?: any;
  text: string;
  important: number;
  completed: boolean;
  date: any;

}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  importantValue = 0;
  taskText = '';
  searchValue = '';

  @Output() addNewTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() emptyAddTaskInput: EventEmitter<any> = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSearchInput: EventEmitter<any> = new EventEmitter<any>();

  constructor(public api: ApiService) {
  }

  ngOnInit(): void {
  }

  importantValuePlus() {
    if (this.importantValue < 5) {
      this.importantValue++;
    }
  }

  importantValueMinus() {
    if (this.importantValue > 0) {
      this.importantValue--;
    }
  }

  createNewTask() {
    if (this.taskText.trim()) {
      const task = {
        text: this.taskText,
        important: this.importantValue,
        completed: false,
        date: Date.now(),
      };
      this.api.post(task);
      this.taskText = '';
      this.importantValue = 0;
    } else {
      this.emptyAddTaskInput.emit(true);
    }
  }

  searchInput() {
    this.onSearchInput.emit(this.searchValue);
  }
}
