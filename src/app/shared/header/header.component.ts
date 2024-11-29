import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  loggedIn: boolean = false;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.loggedIn$.subscribe((status) => (this.loggedIn = status));
  }
}
