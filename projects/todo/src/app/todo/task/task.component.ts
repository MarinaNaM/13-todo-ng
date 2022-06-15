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
  constructor() {
    this.onDelete = new EventEmitter();
  }

  ngOnInit(): void {}

  deleteHandle(id: TaskModel['id']): void {
    this.onDelete.next(id);
  }
}
