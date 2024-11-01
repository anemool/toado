import { TaskPriority } from './TaskPriority.model';

export class Task {
  taskTitle!: string;
  taskDescription!: string;
  dueDate!: Date;
  taskPriority?: TaskPriority;
}
