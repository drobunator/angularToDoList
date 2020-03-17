import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private api: ApiService,
    private router: Router
  ) {}


  create(user) {
    return this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(resp => {
        this.api.createUser(user, resp.user.uid).then(_ => {})
          .catch(err => console.log(err));
      })
      .catch(err => console.log('auth err', err));
  }


  login(user) {
    return this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(resp => {
        if (resp.user.uid) {
          this.router.navigate(['/']);
        }
      })
      .catch(err => console.log(err));
  }

  logout() {
    return this.auth.auth.signOut().then(resp => {
      this.router.navigate(['login']);
    });
  }

  authState() {
    return this.auth.authState;
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
