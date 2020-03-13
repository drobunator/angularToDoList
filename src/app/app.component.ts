import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';
import {delay} from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  modalConfirmActive = false;
  modalAlertClose = false;
  taskIndex: number;
  taskId: string;
  searchInputValue = '';
  sortValue: string;
  sortKey: string;
  tasks: any[] = [];
  emptyTitle = 'todo list is empty';
  loading = false;

  constructor(public data: DataService) {
  }


  ngOnInit(): void {
    this.loading = true
    this.data.tasks
      .subscribe(resp => {
        console.log(resp);
        this.tasks = resp;
        this.loading = false;
      });
  }

  pushTask(task) {
    // this.data.postTask(task)
    //   .subscribe(resp => this.tasks.unshift(resp));
  }

  deleteTask({index, id}) {
    this.modalConfirmActive = true;
    this.taskIndex = index;
    this.taskId = id;
  }

  editTask({index, text, id}) {
    // this.data.putTask(text, id, 'text')
    //   .subscribe(resp => this.tasks[index].text = resp);
  }

  changeImportantTask({index, value, id}) {
    // this.data.putTask(value, id, 'important')
    //   .subscribe(resp => this.tasks[index].important = resp);
  }

  checkboxTaskChecked({index, value, id}) {
    // this.data.putTask(value, id, 'completed')
    //   .subscribe(resp => this.tasks[index].completed = resp);
  }

  modalConfirmValue(value: boolean) {
    if (value === true) {
      this.modalConfirmActive = false;
      // this.data.deleteTask(this.taskId)
      //   .subscribe(resp => resp);
      // this.tasks.splice(this.taskIndex, 1);
    } else {
      this.modalConfirmActive = false;
    }
  }
}
