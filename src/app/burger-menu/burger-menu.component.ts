import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ApiService} from '../services/api.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {

  lastName = '';
  firstName = '';
  email = '';

  constructor(private auth: AuthService, private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getUserData(this.auth.currentUser.uid).subscribe(data => {
      const user = data.payload.data();
      console.log(user);
    });
  }
}
