import {Injectable} from '@angular/core';
import {ApiService} from '../main-page/services/api.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {PopupModalService} from '../popup-modal/popup-modal.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private api: ApiService,
    private router: Router,
    private popup: PopupModalService
  ) {
  }


  create(user) {
    return this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(resp => {
        this.api.createUser(user, resp.user.uid).then(_ => {
          this.popup.popupVisible(true, true);
          this.popup.title = 'Registred';
          this.router.navigate(['/']);
        })
          .catch(err => console.log(err));
      })
      .catch(err => {
        this.popup.popupVisible(true);
        this.popup.title = err.message;
      });
  }

  login(user) {
    return this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(resp => {
        if (resp.user.uid) {
          this.router.navigate(['/']);
        }
      })
      .catch(err => {
        this.popup.title = err.message;
        this.popup.popupVisible(true);
      });
  }

  logout() {
    return this.auth.auth.signOut()
      .then(_ => {
        this.popup.title = 'Logout';
        this.popup.popupVisible(true, true);
        this.router.navigate(['login']);
      })
      .catch(err => {
        this.popup.title = err.message;
        this.popup.popupVisible(true);
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
