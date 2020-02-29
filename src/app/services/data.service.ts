import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, map} from "rxjs/operators";
import {pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://angulartodolist-e91cf.firebaseio.com/tasks';


  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(`${this.url}.json`)
      .pipe(map(response => {
        if (!response) return;
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key
          }))
      }))
  }

  postTask(task) {
    return this.http.post(`${this.url}.json`, task)
      .pipe(map(resp => {
        return {
          ...task,
          id: resp['name'],
        }
      }))
  }

  putEditTask(text, id) {
    return this.http.put(`${this.url}/${id}/text.json`, JSON.stringify(text)).pipe(delay(10000))
  }

  putImportantTask(value, id) {
    return this.http.put(`${this.url}/${id}/important.json`, JSON.stringify(value))
  }

  putCheckboxCheck(value, id) {
    return this.http.put(`${this.url}/${id}/completed.json`, JSON.stringify(value))
  }

  deleteTask(id) {
   return this.http.delete(`${this.url}/${id}.json`)
  }

}
