import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../models/task';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'isdi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  title!: string;
  tasks!: Array<TaskModel>;

  constructor(private taskState: TaskStateService) {}

  ngOnInit(): void {
    this.title = 'Lista de tareas by srv';
    this.taskState.getTasks().subscribe((data) => (this.tasks = data));
  }
}
