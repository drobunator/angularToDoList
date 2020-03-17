import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../main-page/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private auth: AuthService, private router: Router) {

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
    this.auth.create(this.registerForm.value).then(resp => {
      console.log('register create', resp);
      this.router.navigate(['/'])
      this.registerForm.reset();
    });

  }
}
