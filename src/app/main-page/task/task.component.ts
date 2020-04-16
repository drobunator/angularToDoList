import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../header/header.component';
import {ApiService} from '../../services/api.service';
import {ConfirmService} from '../../services/confirm.service';
import {CounterService} from '../../services/counter.service';

enum ImportantState {
  none = 0,
  task_one = 1,
  task_two = 2,
  task_three = 3,
  task_four = 4,
  task_fife = 5,
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [CounterService]
})


export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;

  taskEditActive = false;
  buttonsTaskActive = false;
  editFormValue: string;
  counterActive = false;
  checkboxValue: boolean;
  check: boolean;
  importantState = ImportantState;

  constructor(
    private api: ApiService,
    private confirm: ConfirmService,
    public counter: CounterService
  ) {
  }

  ngOnInit(): void {
    this.counter.setValue = this.task.important;
    this.editFormValue = this.task.text;
    this.checkboxValue = this.task.completed;
    this.check = this.task.completed;
  }


  taskDelete() {
    this.confirm.stat = true;
    this.confirm.taskId = this.task.id;
  }

  editTask() {
    this.api.update(
      this.task.id,
      {text: this.editFormValue}
    ).catch(_ => console.log('Something went wrong'));
    this.taskEditActive = false;
  }

  cancelEditTask() {
    this.taskEditActive = false;
    this.editFormValue = this.task.text;
  }

  onCheck(event) {
    this.checkboxValue = event.target.checked;
    this.api.update(
      this.task.id,
      {completed: event.target.checked}
    )
      .catch(_ => console.log('Something went wrong'));
  }

  updateImportant() {
    if (this.counter.value !== this.task.important) {
      this.counter.changeValue(this.task.id);
    }
  }

  counterClose() {
    this.counterActive = false;
    this.counter.value = this.task.important;
  }
}
