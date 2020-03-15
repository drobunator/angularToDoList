import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buttons-block',
  templateUrl: './buttons-block.component.html',
  styleUrls: ['./buttons-block.component.scss']
})
export class ButtonsBlockComponent implements OnInit {

  @Output() onSortBtn: EventEmitter<any> = new EventEmitter<any>();

  sortBtnsFlag = true;

  constructor() {
  }

  ngOnInit() {
  }
  onSortBtnsClick(key){
    if (this.sortBtnsFlag === false) {
      this.onSortBtn.emit({value: 'min', key: key});
      this.sortBtnsFlag = true;
    } else {
      this.onSortBtn.emit({value: 'max', key: key});
      this.sortBtnsFlag = false;
    }
  }

}
