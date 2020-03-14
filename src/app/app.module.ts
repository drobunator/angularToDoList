import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ButtonsBlockComponent} from './buttons-block/buttons-block.component';
import {FormsModule} from '@angular/forms';
import {TaskComponent} from './task/task.component';
import {ModalConfirmComponent} from './modal-confirm/modal-confirm.component';
import {ModalAlertComponent} from './modal-alert/modal-alert.component';
import {SearchPipePipe} from './pipes/search-pipe.pipe';
import {SortPipe} from './pipes/sort.pipe';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonsBlockComponent,
    TaskComponent,
    ModalConfirmComponent,
    ModalAlertComponent,
    SearchPipePipe,
    SortPipe,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    SharedModule,
    AuthModule,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
