import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

export interface Task {
  text: string;
  date: number;
  id?: string;
  important: number;
  completed: boolean;
}

export interface UserData {
  email: string;
  firstName: string;
  lastName: string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private id = '';

  constructor(
    private http: AngularFirestore
  ) {
  }


  get(id) {
    this.id = id;
    return this.http.collection<Task[]>(`users/${id}/tasks`).snapshotChanges();
  }

  getUserData(id) {
    return this.http.collection<UserData>(`users/`).doc(id).snapshotChanges();
  }

  post(task: object) {
    const id = this.http.createId();
    return this.http.collection<Task>(`users/${this.id}/tasks`).doc(id).set({
      ...task,
      id
    });
  }

  update(id, value) {
    return this.http.collection<Task>(`users/${this.id}/tasks`).doc(id).update(value);
  }

  delete(id: string) {
    return this.http.collection(`users/${this.id}/tasks`).doc(id).delete();
  }

  createUser(user, id: string) {
    return this.http.collection<UserData>('users').doc(id).set({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  }
}
