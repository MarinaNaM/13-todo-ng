import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskModel } from '../../models/task';

@Component({
  selector: 'isdi-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: TaskModel;
  @Output() onDelete: EventEmitter<number>;
  @Output() onChange: EventEmitter<TaskModel>;
  constructor() {
    this.onDelete = new EventEmitter();
    this.onChange = new EventEmitter();
  }

  ngOnInit(): void {}

  deleteHandle(id: TaskModel['id']): void {
    this.onDelete.next(id);
  }

  changeHandle() {
    this.task.isCompleted = !this.task.isCompleted;
    this.onChange.next(this.task);
  }
}
