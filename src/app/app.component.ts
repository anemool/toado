import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddTaskComponent } from './shared/add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    HeaderComponent,
    AddTaskComponent,
    TaskListComponent,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todoApp';
  loggedIn: any;
}
