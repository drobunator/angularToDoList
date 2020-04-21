import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {AuthService} from '../../services/auth.service';
import {CounterService} from '../../services/counter.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  styleUrls: ['./header.component.scss'],
  providers: [CounterService]
})


export class HeaderComponent implements OnInit {
  searchValue = '';
  form: FormGroup;
  valid = false;

  @Output() onSearchInput: EventEmitter<any> = new EventEmitter<any>();
  visible = false;

  constructor(
    public api: ApiService,
    public auth: AuthService,
    public counter: CounterService
  ) {
    this.counter.setValue = 0;
    this.form = new FormGroup({
      text: new FormControl(
        null,
        [
          Validators.minLength(1),
          Validators.required]
      )
    });
  }

  ngOnInit(): void {
  }


  createNewTask() {
    if (this.form.valid) {
      const task: Task = {
        text: this.form.value.text,
        important: this.counter.value,
        completed: false,
        date: Date.now(),
      };
      this.api.post(task);
      this.counter.setValue = 0;
      this.form.reset();
    } else {
      this.valid = true;
    }
  }

  searchInput() {
    this.onSearchInput.emit(this.searchValue);
  }


}
