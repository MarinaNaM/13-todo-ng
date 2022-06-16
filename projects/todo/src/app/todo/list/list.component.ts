import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskModel } from '../../models/task';

@Component({
  selector: 'isdi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  title!: string;
  @Input() tasks!: Array<TaskModel>;
  @Output() onDelete: EventEmitter<number>;
  @Output() onChange: EventEmitter<TaskModel>;
  constructor() {
    this.onDelete = new EventEmitter();
    this.onChange = new EventEmitter();
  }

  ngOnInit(): void {
    this.title = 'Lista de tareas';
  }

  onDeleteHandle(id: TaskModel['id']) {
    this.onDelete.next(id);
  }

  onChangeHandle(task: TaskModel) {
    this.onChange.next(task);
  }
}
