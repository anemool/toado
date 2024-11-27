import { Injectable } from '@angular/core';
import { Task } from '../model/Task.model';
import { Priorities, TaskPriority } from '../model/TaskPriority.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  editTaskPriority(taskPriority: TaskPriority) {
    switch (taskPriority.value) {
      case 'low':
        taskPriority = this.priorities[0];
        break;
      case 'medium':
        taskPriority = this.priorities[1];
        break;
      case 'high':
        taskPriority = this.priorities[2];
        break;
    }
    return { ...taskPriority };
  }
  constructor() {}

  priorities = Priorities;
  tasks: Task[] = [];

  getTaskList() {
    return this.tasks;
  }
  AddTask(taskName: string, taskPriority: TaskPriority) {
    taskPriority = this.editTaskPriority(taskPriority);
    this.tasks.push(new Task(taskName, taskPriority));
  }
  deleteTask(_t2: Task) {
    const index: number = this.tasks.indexOf(_t2);
    this.tasks.splice(index, 1);
  }
}
