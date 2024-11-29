import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    }
  }
  logOut() {
    this.loggedIn.next(false);
  }
  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }
}
