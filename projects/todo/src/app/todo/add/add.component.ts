import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { iTaskData } from '../../interfaces/task-data';

@Component({
  selector: 'isdi-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Output() onSubmit: EventEmitter<iTaskData>;
  taskData;

  constructor() {
    this.taskData = new FormBuilder().group({ title: '', responsible: '' });
    this.onSubmit = new EventEmitter();
  }

  ngOnInit(): void {}

  handleSubmit(data: iTaskData) {
    this.onSubmit.next(data);
  }
}
