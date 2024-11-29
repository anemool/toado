import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from 'stream';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  username: string = '';
  password: string = '';
  onLogin() {
    if (this.username === 'a' && this.password === 'a') {
      alert('Login successful!');
      this.router.navigate(['/tasks']);
    } else {
      alert('Invalid username or password');
    }
  }
}
