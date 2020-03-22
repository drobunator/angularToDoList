import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupModalService {
  public title = 'Title';
  public visible = false;
  public success = false;

  constructor() {
  }


  popupVisible(state: boolean, success?: boolean) {
    this.visible = state;
    this.success = success || false;
    setTimeout(() => {
      this.visible = false;
    }, 4000);
  }

}

