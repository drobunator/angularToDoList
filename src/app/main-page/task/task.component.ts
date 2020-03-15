import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../header/header.component';
import {DataService} from '../services/data.service';
import {ApiService} from '../services/api.service';
import {ConfirmService} from '../services/confirm.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() index: number;

  taskEditActive = false;
  buttonsTaskActive = false;
  editFormValue: string;
  counterActive = false;
  importantValue: number;
  checkboxValue: boolean;
  check: boolean;

  constructor(
    private api: ApiService,
    private confirm: ConfirmService
  ) {
  }

  ngOnInit(): void {
    this.editFormValue = this.task.text;
    this.importantValue = this.task.important;
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
    )
      .then(_ => console.log());
    this.taskEditActive = false;
  }

  cancelEditTask() {
    this.taskEditActive = false;
    this.editFormValue = this.task.text;
  }

  counterPlus(event) {
    this.counterActive = true;
    if (this.importantValue < 5) {
      this.importantValue++;
      this.api.update(
        this.task.id,
        {important: this.importantValue}
      )
        .then(_ => {
          this.counterActive = true;
          console.log('Important changed');
        })
        .catch(_ => console.log('Something whent wrong'));
    }
  }

  counterMinus(event) {
    this.counterActive  = true;
    if (this.importantValue > 0) {
      this.importantValue--;
      this.api.update(
        this.task.id,
        {important: this.importantValue}
      )
        .then(_ => console.log('Important changed'))
        .catch(_ => console.log('Something whent wrong'));
    }
  }

  onCheck(event) {
    this.checkboxValue = event.target.checked;
    this.api.update(
      this.task.id,
      {completed: event.target.checked}
    )
      .then(_ => {
        console.log('Completed changed');
      })
      .catch(_ => console.log('Something whent wrong'));
  }
}
