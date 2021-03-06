import { iTaskData } from '../interfaces/task-data';

export class TaskModel implements iTaskData {
  id: number;
  isCompleted: boolean;
  static generateId(): number {
    return Math.ceil(Math.random() * 100_000);
  }
  constructor(public title: string, public responsible: string) {
    this.isCompleted = false;
    this.id = TaskModel.generateId();
  }
}
