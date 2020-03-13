import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {APIService} from './api.service';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private stream$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private items: any[] = [];

  constructor(private http: APIService) {
    this.data();
  }

  get tasks() {
    return this.stream$.asObservable();
  }

  data() {

    this.http.get()
      .then(data => {
        const arr = Object.entries(data.val()).map(task => {
          const item = task[1];
          // @ts-ignore
          item.id = task[0];
          return item;
        });
        this.items = arr;
        this.stream$.next(this.items);
      })
      .catch(err => console.log(err));
  }


  // getData() {
  //   return this.http.get(`${this.url}.json`)
  //     .pipe(map(response => {
  //       if (!response) {
  //         return;
  //       }
  //       return Object
  //         .keys(response)
  //         .map(key => ({
  //           ...response[key],
  //           id: key
  //         }));
  //     }));
  // }
  //
  // postTask(task) {
  //   return this.http.post(`${this.url}.json`, task)
  //     .pipe(map(resp => {
  //       return {
  //         ...task,
  //         id: resp['name'],
  //       };
  //     }));
  // }
  //
  // putTask(value, id, key) {
  //   return this.http.put(`${this.url}/${id}/${key}.json`, JSON.stringify(value));
  // }
  //
  // deleteTask(id) {
  //   return this.http.delete(`${this.url}/${id}.json`);
  // }

}
