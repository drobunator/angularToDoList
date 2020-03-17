import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {AuthGuardGuard} from './auth-guard.guard';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {LoginAuthGuard} from './login-auth.guard';

const routes: Routes = [
  {path: '', component: MainPageComponent, canActivate: [AuthGuardGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LoginAuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoginAuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {


}
