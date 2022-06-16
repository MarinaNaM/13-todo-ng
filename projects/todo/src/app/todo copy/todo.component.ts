import { Component, OnInit } from '@angular/core';
import { getTaskList } from '../data/tasks';
import { TaskModel } from '../models/task';
import { ApiService } from '../services/api.service';
import { TaskStateService } from '../services/task-state.service';

@Component({
  selector: 'isdi-todo',
  template: `
    <h2>todos</h2>
    <isdi-add></isdi-add>
    <isdi-list></isdi-list>
  `,
  styles: [],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
