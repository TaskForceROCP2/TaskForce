import { Component, OnInit } from '@angular/core';
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

  constructor(private taskService: TaskService) { 
  
  }

  ngOnInit(): void {
  }
  
  searchTask() { 
    let x = 0;
    let results: any[];
    console.log(`Searching for ${this.searchVal}`);

    // if (this.searchVal) {
    this.taskService.getTasks().subscribe((tasks) => {
        this.tasks = tasks;
        // console.log(`${this.tasks.length} tasks`);
        // console.log(results);
        results = this.filterByValue(this.searchVal);
        // console.log(results);
        if (results === undefined || results.length === 0) { 
          alert(`${this.searchVal} was not found`);
          this.searchVal = '';
        } 
        else console.log(`${results.length} results`);
      });
  }
    
  filterByValue(myString: String): any[] {
    let myResults: any[] = [];
    for (let i = 0; i < this.tasks.length; i++) {
      // console.log('filtering');
      if (this.tasks[i].title.toLowerCase().includes(myString.toLowerCase())) {
        myResults.push(this.tasks[i]);
      }
    }
    return myResults;
  }
}
