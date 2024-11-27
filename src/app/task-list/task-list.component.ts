import { Component } from '@angular/core';
import { TasksService } from '../shared/tasks.service';
import { Task } from '../model/Task.model';
import { TaskComponent } from '../shared/task/task.component';
import { FormsModule } from '@angular/forms';
import { Priorities, TaskPriority } from '../model/TaskPriority.model';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  constructor(private tasksService: TasksService) {
    this.getTaskList();
  }

  deleteTask(_t2: Task) {
    this.tasksService.deleteTask(_t2);
  }
  getTaskList() {
    this.tasks = this.tasksService.getTaskList();
  }

  priorities: TaskPriority[] = Priorities;
  startEdit(_t2: Task) {
    this.editing = true;
    this.taskInEditing = _t2;
  }
  saveEdit() {
    return;
  }
  editTaskPriority(task: TaskPriority) {
    this.tasksService.editTaskPriority(task);
    this.getTaskList();
  }
  tasks!: Task[];
  editing: boolean = false;
  taskInEditing!: Task;
}
