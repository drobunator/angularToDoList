import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId = '';

  constructor(
    private auth: AngularFireAuth,
    private api: ApiService,
    private router: Router
  ) {
  }


  create(user) {
    this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(resp => {
        console.log(resp);
        this.api.createUser(user, resp.user.uid)
          .then(r => console.log(r))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  login(user) {
    return this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(resp => {
        console.log('login auth service', resp);
        if (resp.user.uid) {
          this.router.navigate(['/']);
          this.userId = resp.user.uid;
        } else {
          this.userId = '';
        }
      });
  }

  logout() {
    this.auth.auth.signOut().then(resp => {
      console.log('logout');
      this.userId = '';
      this.router.navigate(['login']);
    });
  }

  isAuthenticated() {
    return new Promise(resolve => {
      this.auth.authState.subscribe(resp => {
        if (resp) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }
}
