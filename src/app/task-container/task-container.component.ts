import { Component } from '@angular/core';
import { AddTaskComponent } from '../shared/add-task/add-task.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-container',
  standalone: true,
  imports: [AddTaskComponent, TaskListComponent],
  templateUrl: './task-container.component.html',
  styleUrl: './task-container.component.css',
})
export class TaskContainerComponent {
  constructor(private router: Router, private loginService: LoginService) {}
  ngOnInit() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }
}
