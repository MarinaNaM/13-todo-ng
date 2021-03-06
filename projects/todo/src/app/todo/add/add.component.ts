import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { iTaskData } from '../../interfaces/task-data';
import { TaskModel } from '../../models/task';

@Component({
  selector: 'isdi-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Output() onSubmit: EventEmitter<TaskModel>;

  task!: iTaskData;

  constructor() {
    this.onSubmit = new EventEmitter();
  }

  ngOnInit(): void {
    this.task = { title: '', responsible: '' };
  }

  handleSubmit() {
    if (!this.task.title) return;
    this.onSubmit.next({
      ...new TaskModel(this.task.title, this.task.responsible),
    });
    this.task = { title: '', responsible: '' };
  }
}
