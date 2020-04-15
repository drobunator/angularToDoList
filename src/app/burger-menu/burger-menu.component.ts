import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ApiService, UserData} from '../services/api.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit, OnDestroy {
  userInfo: any;
  sub: any;

  constructor(private auth: AuthService, private api: ApiService) {
  }

  ngOnInit(): void {
   this.sub = this.api.getUserData(this.auth.currentUser.uid).subscribe(data => {
      this.userInfo = data.payload.data();
    });
  }

  logout() {
    this.auth.logout().then(_ => {
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
