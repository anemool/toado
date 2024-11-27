import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Priorities, TaskPriority } from '../../model/TaskPriority.model';
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

  priorities: TaskPriority[] = Priorities;

  taskPriority: TaskPriority = {
    value: 'low',
    label: 'p3',
    backgroundColor: '#9efee9',
  };
  taskName!: string;
  task!: Task;
  onAdd() {
    this.tasksService.AddTask(this.taskName, this.taskPriority);
  }
}
