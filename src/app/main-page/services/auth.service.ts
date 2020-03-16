import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private api: ApiService
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
    this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }

  logout() {
    this.auth.auth.signOut()
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  }

  get currentUser() {
    return this.auth.auth.currentUser.uid;
  }
}
