import { Component } from '@angular/core';
import { AddTaskComponent } from "../shared/add-task/add-task.component";
import { TaskListComponent } from "../task-list/task-list.component";

@Component({
  selector: 'app-task-container',
  standalone: true,
  imports: [AddTaskComponent, TaskListComponent],
  templateUrl: './task-container.component.html',
  styleUrl: './task-container.component.css'
})
export class TaskContainerComponent {

}
