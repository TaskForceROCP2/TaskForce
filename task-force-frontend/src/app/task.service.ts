import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
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
        alert (`Task was not added!`);
        return throwError(error);
      })
    );
  }
  
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/todos/${id}`).pipe(
      catchError((error: any) => {
        console.error(error);
        alert ('Task was not deleted!');
        return throwError(error);
      })
    );
  }

  deleteAllTasks(): Observable<any> {
    return this.http.delete(`${BASE_URL}/todos/truncate`).pipe(
      catchError((error: any) => {
        console.error(error);
        alert ('Tasks were not deleted!');
        return throwError(error);
      })
    );
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${BASE_URL}/todos/${id}`).pipe(
      catchError((error: any) => {
        console.error(error);
        alert (`Task was not retrieved!`);
        return throwError(error);
      })
    );
  }
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${BASE_URL}/todos`).pipe(
      catchError((error: any) => {
        console.error(error);
        alert ('Tasks were not retrieved!');
        return throwError(error);
      })
    );
  }

  patchTask(id: number): Observable<any> {
    return this.http.patch(`${BASE_URL}/todos/${id}`, null).pipe(
      catchError((error: any) => {
        console.error(error);
        alert ('Task was not patched!');
        return throwError(error);
      })
    );
  }
  
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${BASE_URL}/todos`, task).pipe(
      catchError((error: any) => {
        console.error(error);
        alert ('Task was not updated!');
        return throwError(error);
      })
    );
  }
}
