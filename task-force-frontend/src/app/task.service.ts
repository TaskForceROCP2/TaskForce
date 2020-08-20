import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`http://18.217.160.143:8080/todos/${task.id}`, task);
  }
  
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`http://18.217.160.143:8080/todos/${id}`);
  }

  deleteAllTasks(): Observable<any> {
    return this.http.delete(`http://18.217.160.143:8080/todos/truncate`);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`http://18.217.160.143:8080/todos/${id}`);
  }
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`http://18.217.160.143:8080/todos`);
  }

  patchTask(id: number): Observable<any> {
    return this.http.patch(`http://18.217.160.143:8080/todos/${id}`, null);
  }
  
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`http://18.217.160.143:8080/todos/`, task);
  }
}
