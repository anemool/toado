import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private loginService: LoginService) {}
  username: string = '';
  password: string = '';
  onLogin() {
    this.loginService.logIn(this.username, this.password);
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/tasks']);
    } else {
      alert('Wrong login credentials');
    }
  }
}
