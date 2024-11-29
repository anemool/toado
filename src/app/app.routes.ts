import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskContainerComponent } from './task-container/task-container.component';

export const routes: Routes = [
  { path: '', title: 'Toado', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'tasks', title: 'Tasks', component: TaskContainerComponent },
];
