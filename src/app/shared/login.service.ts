import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  private loggedIn = new BehaviorSubject<boolean>(this.getStoredLoginState());
  loggedIn$ = this.loggedIn.asObservable();

  logIn(username: string, password: string) {
    if (username === 'a' && password === 'a') {
      this.loggedIn.next(true);
      this.setStoredLoginState(true);
    }
  }
  private getStoredLoginState(): boolean {
    try {
      return sessionStorage.getItem('loggedIn') === 'true';
    } catch {
      return false;
    }
  }
  private setStoredLoginState(state: boolean) {
    try {
      sessionStorage.setItem('loggedIn', state.toString());
    } catch {
      console.warn('sessionStorage is not available.');
    }
  }
  logOut() {
    this.loggedIn.next(false);
    this.setStoredLoginState(false);
  }
  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }
}
