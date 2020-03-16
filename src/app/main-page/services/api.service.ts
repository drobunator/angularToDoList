import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: AngularFirestore) {
  }

  get() {
    return this.http.collection('tasks').snapshotChanges();
  }

  post(task: object) {
    const id = this.http.createId();
    return this.http.collection('tasks').doc(id).set({
      ...task,
      id
    });
  }

  update(id, value) {
    return this.http.collection('tasks').doc(id).update(value);
  }

  delete(id: string) {
    return this.http.collection('tasks').doc(id).delete();
  }

  createUser(user: object, id: string) {
    return this.http.collection('users').doc(id).set(user);
  }
}
