import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './main-page/header/header.component';
import {ButtonsBlockComponent} from './main-page/buttons-block/buttons-block.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskComponent} from './main-page/task/task.component';
import {ModalConfirmComponent} from './main-page/modal-confirm/modal-confirm.component';
import {SearchPipePipe} from './main-page/pipes/search-pipe.pipe';
import {SortPipe} from './main-page/pipes/sort.pipe';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {SharedModule} from './shared/shared.module';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {AppRoutingModule} from './app-routing.module';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthModule} from './auth/auth.module';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonsBlockComponent,
    TaskComponent,
    ModalConfirmComponent,
    SearchPipePipe,
    SortPipe,
    MainPageComponent,
    BurgerMenuComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        SharedModule,
        CommonModule,
        AppRoutingModule,
        AuthModule,
        ReactiveFormsModule
    ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
