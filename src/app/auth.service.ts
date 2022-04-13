import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/switchMap';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
// export const auth = getAuth();

@Injectable()
export class AuthService {
  constructor(private router: Router) {}
  auth = getAuth();

  login(auth, email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log('Nice, it worked!');
        this.router.navigateByUrl('/profile');
      })
      .catch((err) => {
        console.log('Something went wrong: ', err.message);
      });
  }

  register(auth, email: string, password: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log('Sucess', value);
        this.router.navigateByUrl('/profile');
      })
      .catch((error) => {
        console.log('Something went wrong: ', error);
      });
  }

  logout() {
    signOut(auth).then(() => {
      this.router.navigate(['/']);
    });
  }
}
