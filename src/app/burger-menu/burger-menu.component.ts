import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ApiService, UserData} from '../services/api.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {
  userInfo: any;

  constructor(private auth: AuthService, private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getUserData(this.auth.currentUser.uid).subscribe(data => {
      this.userInfo = data.payload.data();
      console.log(data.payload.data());
    });
  }
}
