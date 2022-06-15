import { Component, OnInit } from '@angular/core';
import { getTaskList } from '../data/tasks';
import { iTaskData } from '../interfaces/task-data';
import { TaskModel } from '../models/task';

@Component({
  selector: 'isdi-todo',
  template: `
    <h2>todos</h2>
    <isdi-add (onSubmit)="onSubmitHandle($event)"></isdi-add>
    <isdi-list [tasks]="tasks" (onDelete)="onDeleteHandle($event)"></isdi-list>
  `,
  styles: [],
})
export class TodoComponent implements OnInit {
  tasks!: Array<TaskModel>;
  constructor() {}

  ngOnInit(): void {
    this.tasks = getTaskList();
  }

  onDeleteHandle(id: TaskModel['id']) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }

  onSubmitHandle(data: iTaskData) {
    this.tasks.push(
      new TaskModel(data.title as string, data.responsible as string)
    );
  }
}
