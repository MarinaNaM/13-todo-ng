import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { iTaskData } from '../../interfaces/task-data';
import { TaskModel } from '../../models/task';
import { TaskStateService } from '../../services/task-state.service';

@Component({
  selector: 'isdi-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  task!: iTaskData;

  constructor(private taskState: TaskStateService) {}

  ngOnInit(): void {
    this.task = { title: '', responsible: '' };
  }

  handleSubmit() {
    if (!this.task.title) return;
    this.task = new TaskModel(this.task.title, this.task.responsible);
    this, this.taskState.addTask(this.task as TaskModel);
    this.task = { title: '', responsible: '' };
  }
}
