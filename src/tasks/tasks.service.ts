import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAlltTasks(): Task[] {
    return this.tasks;
  }
}
