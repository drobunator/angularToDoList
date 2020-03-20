import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  activeConfirm = false;
  taskId = '';
  title = 'Are you sure?';

  constructor(private api: ApiService) {
  }

  delete(value: boolean) {
    if (value) {
      this.activeConfirm = false;
      this.api.delete(this.taskId);
    } else {
      this.activeConfirm = false;
    }

  }

  set stat(value: boolean) {
    this.activeConfirm = value;
  }

  set id(value) {
    this.taskId = value;
  }

  set setTitle(value: string) {
    this.title = value;
  }
}
