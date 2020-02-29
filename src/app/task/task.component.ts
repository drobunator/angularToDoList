  import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
  import {Task} from "../header/header.component";

  @Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
  })
  export class TaskComponent implements OnInit {
    @Input() task: Task;
    @Input() index: number;
    @Output() onRemoveTask: EventEmitter<any> = new EventEmitter<any>();
    @Output() onEditTask: EventEmitter<any> = new EventEmitter<any>();
    @Output() onChangeImportantTask: EventEmitter<any> = new EventEmitter<any>();
    @Output() onCheckboxChecked: EventEmitter<any> = new EventEmitter<any>();


    taskEditActive = false;
    buttonsTaskActive = false;
    editFormValue: string;
    taskImportantActive = false;
    importantValue: number;
    checkboxValue: boolean;
    checkedInactive = true;
    check: boolean;

    constructor() {
    }

    ngOnInit(): void {
      this.editFormValue = this.task.text;
      this.importantValue = this.task.important;
      this.checkboxValue = this.task.completed;
      this.check = this.task.completed;
    }


    taskDelete() {
      this.onRemoveTask.emit({
        index: this.index,
        id: this.task.id
      });
    }

    editTask() {
      this.onEditTask.emit({
        index: this.index,
        text: this.editFormValue,
        id: this.task.id
      });
      this.taskEditActive = false;
    }

    cancelEditTask() {
      this.taskEditActive = false;
      this.editFormValue = this.task.text;
    }

    importantValuePlus(){
      if(this.importantValue < 5){
        this.importantValue++;
        this.onChangeImportantTask.emit({
          index: this.index,
          value: this.importantValue,
          id: this.task.id
        })
      }
    }

    importantValueMinus(){
      if(this.importantValue > 0){
        this.importantValue--;
        this.onChangeImportantTask.emit({index: this.index, value: this.importantValue, id: this.task.id})
      }
    }
    onCheck(event){
      this.checkboxValue = event.target.checked;
      this.onCheckboxChecked.emit({
        index: this.index,
        value: event.target.checked,
        id: this.task.id
      });
      this.checkedInactive = !event.target.checked;
    }
  }
