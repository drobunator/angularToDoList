import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../main-page/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.minLength(1),
        Validators.required
      ]),
      lastName: new FormControl(null, [
        Validators.minLength(1),
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.email,
        Validators.minLength(1),
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required
      ]),
    });
  }

  submit() {
    this.auth.create(this.registerForm.value);
    this.registerForm.reset();
  }
}
