import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PopupModalService} from '../../services/popup-modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    public popup: PopupModalService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required
      ])
    });
  }

  login() {
    if (!this.loginForm.invalid) {
      this.auth.login(this.loginForm.value).then(resp => {
        this.popup.popupVisible(true, true);
        this.popup.title = 'Loggined';
        this.loginForm.reset();
      });
    }
  }
}
