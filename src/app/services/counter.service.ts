import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  value: number;

  constructor(private api: ApiService) {
  }

  set setValue(value) {
    this.value = value;
  }

  inc() {
    if (this.value < 5) {
      this.value++;
    }
  }

  dec() {
    if (this.value > 0) {
      this.value--;
    }
  }

  changeValue(id: string) {
    this.api.update(id, {important: this.value})
      .then(resp => console.log(resp));
  }

}
