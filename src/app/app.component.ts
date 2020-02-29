import {Component, OnInit} from '@angular/core';
import {Task} from "./header/header.component";
import {delay} from "rxjs/operators";
import {DataService} from "./services/data.service";

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
  tasks: Task [] = [];
  emptyTitle = 'todo list is empty';


  constructor(private data: DataService) {
  }


  ngOnInit(): void {
    this.data.getData()
      .subscribe(resp => {
        if (!resp) return;
        this.tasks = resp.reverse()
      });
  }

  pushTask(task) {
    this.data.postTask(task)

      .subscribe(task => this.tasks.unshift(task));
  }

  deleteTask({index, id}) {
    this.modalConfirmActive = true;
    this.taskIndex = index;
    this.taskId = id;

  }

  editTask({index, text, id}) {
   this.data.putEditTask(text,id)
      .subscribe(resp => this.tasks[index].text = resp);
  }

  changeImportantTask({index, value, id}) {
    this.data.putImportantTask(value, id)
      .pipe(delay(5000))
      .subscribe(resp => this.tasks[index].important = resp);
  }

  checkboxTaskChecked({index, value, id}) {
    this.data.putCheckboxCheck(value,id)
      .subscribe(resp => this.tasks[index].completed = resp);
  }

  modalConfirmValue(value: boolean) {
    if (value === true) {
      this.modalConfirmActive = false;
      this.data.deleteTask(this.taskId)
        .subscribe(resp => resp);
      this.tasks.splice(this.taskIndex, 1);
    } else {
      this.modalConfirmActive = false;
    }
  }
}
