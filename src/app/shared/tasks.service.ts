import { Injectable } from '@angular/core';
import { Task } from '../model/Task.model';
import { TaskPriority } from '../model/TaskPriority.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}
  
  tasks: Task[] = [];
  
  getTaskList() {
    return this.tasks; 
  }
  AddTask(taskName: string, taskPriority: TaskPriority) {
    this.tasks.push(new Task(taskName, taskPriority));
    console.log(this.tasks);
  }
}
