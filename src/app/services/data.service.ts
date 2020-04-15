import {Injectable, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private stream$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private items: any[] = [];

  constructor(private api: ApiService, private auth: AuthService) {
    auth.authState().subscribe(resp => {
      if (!resp) {
        return;
      }
      this.data(resp.uid);
    });

  }

  get tasks() {
    return this.stream$.asObservable();
  }

  data(id) {
    if (!id) {
      return;
    }
    this.api.get(id)
      .subscribe(resp => {
        if (!resp) {
          return;
        }
        this.items = resp
          .map(tasks => {
            return tasks.payload.doc.data();
          });
        this.stream$.next(this.items);
      });
  }




}
