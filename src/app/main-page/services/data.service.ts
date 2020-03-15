import {Injectable, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private stream$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private items: any[] = [];

  constructor(private api: ApiService) {
    this.data();
  }

  get tasks() {
    return this.stream$.asObservable();
  }

  data() {
    this.api.get()
      .subscribe(resp => {
        this.items = resp
          .map(tasks => {
            return tasks.payload.doc.data();
          });
        this.stream$.next(this.items);
      });
  }
}
