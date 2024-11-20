import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskPriority } from '../../model/TaskPriority.model';
import { TasksService } from '../tasks.service';
import { Task } from '../../model/Task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  constructor(private tasksService: TasksService) {}
  Priorities: TaskPriority[] = [
    { value: 'low', label: 'p3' },
    { value: 'medium', label: 'p2' },
    { value: 'high', label: 'p1' },
  ];

  taskPriority: TaskPriority = this.Priorities[0];
  taskName: string = '';

  onAdd() {
    this.tasksService.AddTask(this.taskName, this.taskPriority);
  }
}
