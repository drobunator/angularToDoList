import { NgModule } from '@angular/core';
import {PopupModalComponent} from '../popup-modal/popup-modal.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    PopupModalComponent
  ],
    imports: [
        CommonModule
    ],
  exports: [
    PopupModalComponent
  ]
})
export class SharedModule { }
