import { Injectable } from '@angular/core';
import { Router } from 'express';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();

  logIn(username: string, password: string) {
    if (username === 'a' && password === 'a') {
      this.loggedIn.next(true);
    } else {
      alert('Invalid username or password');
    }
  }
  logOut() {
    this.loggedIn.next(false);
  }
}
