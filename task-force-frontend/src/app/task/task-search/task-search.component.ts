import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../task';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css']
})
export class TaskSearchComponent implements OnInit {
  task: Task;
  tasks: Task[];
  searchVal = '';
  @Output() searchResults = new EventEmitter<Task[]>();

  constructor(private taskService: TaskService, public router: Router) { }

  ngOnInit(): void {
    var input = document.getElementById("myInput");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
      }
    });
  }

  searchTask() {
    this.taskService.searchTask(this.searchVal).subscribe((tasks) => {
      this.tasks = tasks;
      console.log(tasks);


      if (tasks === undefined || tasks?.length === 0) { 
          alert(`${this.searchVal} was not found`);
          this.searchVal = '';
        } 
        else {
          console.log(`${tasks.length} results`);
          if (tasks.length == 1) {
          // this.searchResults.emit(this.tasks);
            this.router.navigate(['/', 'taskDetails'], {queryParams: {"search": this.searchVal}});
          } else if (tasks.length > 1) {
          // this.searchResults.emit(this.tasks);
            this.router.navigate(['/', 'tasks'], {queryParams: {"search": this.searchVal}});
          }
        } 
      });
  }
}