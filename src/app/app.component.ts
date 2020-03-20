import {Component, OnInit} from '@angular/core';
import {PopupModalService} from './services/popup-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
    public popup: PopupModalService
  ) {
  }


  ngOnInit(): void {

  }
}
