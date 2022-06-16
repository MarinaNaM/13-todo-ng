import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:4522/tasks/';
  }

  getTasks(): Observable<Array<TaskModel>> {
    return this.http.get(this.url) as Observable<Array<TaskModel>>;
  }

  addTask(task: TaskModel): Observable<TaskModel> {
    return this.http.post(this.url, task) as Observable<TaskModel>;
  }

  updateTask(task: TaskModel): Observable<TaskModel> {
    return this.http.patch(this.url + task.id, task) as Observable<TaskModel>;
  }

  deleteTask(id: TaskModel['id']): Observable<TaskModel> {
    return this.http.delete(this.url + id) as Observable<TaskModel>;
  }
}
