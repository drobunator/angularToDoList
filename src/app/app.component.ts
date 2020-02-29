import {Component, OnInit} from '@angular/core';
import {Task} from "./header/header.component";
import {HttpClient} from "@angular/common/http";
import {map, subscribeOn} from "rxjs/operators";
import {pipe} from "rxjs";

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
  tasks = [];
  emptyTitle = 'todo list is empty';
  url = 'https://angulartodolist-e91cf.firebaseio.com/tasks';

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    this.http.get(`${this.url}.json`)
      .pipe(map(response => {
        if (!response) return;
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key
          }))
      }))
      .subscribe(resp => {
        if (!resp) return
        this.tasks = resp.reverse()
      });
  }

  pushTask(task) {
    this.http.post(`${this.url}.json`, task)
      .pipe(map(resp => {
        return {
          ...task,
          id: resp['name'],
        }
      }))
      .subscribe(task => this.tasks.unshift(task));

  }

  deleteTask({index, id}) {
    this.modalConfirmActive = true;
    this.taskIndex = index;
    this.taskId = id;

  }

  editTask({index, text, id}) {
    this.http.put(`${this.url}/${id}/text.json`,JSON.stringify(text))
      .subscribe(resp => this.tasks[index].text = resp);
  }

  changeImportantTask({index, value, id}) {
    this.http.put(`${this.url}/${id}/important.json`,JSON.stringify(value))
      .subscribe(resp => this.tasks[index].importan = resp);
  }

  checkboxTaskChecked({index, value, id}) {
    this.http.put(`${this.url}/${id}/completed.json`,JSON.stringify(value))
      .subscribe(resp => this.tasks[index].completed = resp);
  }

  modalConfirmValue(value: boolean) {
    if (value === true) {
      this.modalConfirmActive = false;
      this.http.delete(`${this.url}/${this.taskId}.json`)
        .subscribe(resp => resp);
      this.tasks.splice(this.taskIndex, 1);
    } else {
      this.modalConfirmActive = false;
    }
  }
}
