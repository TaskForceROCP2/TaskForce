import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from './task';

// Lisa's IP
const BASE_URL = 'http://18.217.160.143:8080';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${BASE_URL}/todos`, task).pipe(
      catchError((error: any) => {
        console.error(error);
        return of(null);
      })
    );
  }
  
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/todos/${id}`).pipe(
      catchError((error: any) => {
        console.error(error);
        return of(null);
      })
    );
  }

  deleteAllTasks(): Observable<any> {
    return this.http.delete(`${BASE_URL}/todos/truncate`).pipe(
      catchError((error: any) => {
        console.error(error);
        return of(null);
      })
    );
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${BASE_URL}/todos/${id}`).pipe(
      catchError((error: any) => {
        console.error(error);
        return of(null);
      })
    );
  }
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${BASE_URL}/todos`).pipe(
      catchError((error: any) => {
        console.error(error);
        return of([]);
      })
    );
  }

  patchTask(id: number): Observable<any> {
    return this.http.patch(`${BASE_URL}/todos/${id}`, null).pipe(
      catchError((error: any) => {
        console.error(error);
        return of([]);
      })
    );
  }
  
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${BASE_URL}/todos`, task).pipe(
      catchError((error: any) => {
        console.error(error);
        return of(null);
      })
    );
  }
}
