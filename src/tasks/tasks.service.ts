import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  getAlltTasks() {
    return this.tasks;
  }
}
