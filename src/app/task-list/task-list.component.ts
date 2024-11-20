import { Component } from '@angular/core';
import { TasksService } from '../shared/tasks.service';
import { Task } from '../model/Task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  constructor(private tasksService: TasksService) {
    this.getTaskList();
  }
  tasks!: Task[];
  getTaskList() {
    this.tasks = this.tasksService.getTaskList();
  }
}
