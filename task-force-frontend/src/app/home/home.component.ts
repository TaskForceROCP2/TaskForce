import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addNew = false;
  constructor(private taskService: TaskService) { 
  }

  ngOnInit(): void {
    
  }
  
  addNewTask () {
    return this.addNew = true;
  }

  deleteTasks () {
    this.taskService.deleteAllTasks().subscribe(response => {
      console.log(`Response = ${response}`);
    },
    err => {
      console.log(err);
    },
    () => alert ('All tasks have been deleted!'));
  }
}
