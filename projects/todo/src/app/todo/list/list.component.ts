import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskModel } from '../../models/task';

@Component({
  selector: 'isdi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() tasks!: Array<TaskModel>;
  @Output() onDelete: EventEmitter<number>;
  constructor() {
    this.onDelete = new EventEmitter();
  }

  ngOnInit(): void {}

  onDeleteHandle(id: TaskModel['id']) {
    this.onDelete.next(id);
  }
}
