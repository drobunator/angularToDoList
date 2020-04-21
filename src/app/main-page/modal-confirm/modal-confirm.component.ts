import {Component, OnInit} from '@angular/core';
import {ConfirmService} from '../../services/confirm.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {


  constructor(public confirm: ConfirmService) {
  }

  ngOnInit(): void {
  }

}
