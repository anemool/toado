import { TaskPriority } from './TaskPriority.model';

export class Task {
  constructor(taskTitle: string, taskPriority: TaskPriority) {
    this.taskTitle = taskTitle;
    this.taskPriority = { ...taskPriority };
  }

  taskTitle!: string;
  taskPriority: TaskPriority;
}
