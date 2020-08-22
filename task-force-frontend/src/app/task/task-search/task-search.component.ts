import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../task';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css']
})
export class TaskSearchComponent implements OnInit {
  task: Task;
  tasks: Task[] = [];
  searchVal = '';
  results: Task[] =[];

  constructor(private taskService: TaskService) { 
  
  }

  ngOnInit(): void {
  }

  searchTask() {
    
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
    let x = 0;
    for (let task in this.tasks) {
      if (this.task.title === this.searchVal) {
        this.results[x++] = this.task;
      }
    };
    if (x === 0) { 
      alert('Task not found');
      this.searchVal = '';
    }
    else {
      // go to card or task page list?
    }
  }
}
