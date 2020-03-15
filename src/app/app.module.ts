import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './main-page/header/header.component';
import {ButtonsBlockComponent} from './main-page/buttons-block/buttons-block.component';
import {FormsModule} from '@angular/forms';
import {TaskComponent} from './main-page/task/task.component';
import {ModalConfirmComponent} from './main-page/modal-confirm/modal-confirm.component';
import {ModalAlertComponent} from './main-page/modal-alert/modal-alert.component';
import {SearchPipePipe} from './main-page/pipes/search-pipe.pipe';
import {SortPipe} from './main-page/pipes/sort.pipe';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {SharedModule} from './shared/shared.module';
import {CommonModule} from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: MainPageComponent}
];


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
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    SharedModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
