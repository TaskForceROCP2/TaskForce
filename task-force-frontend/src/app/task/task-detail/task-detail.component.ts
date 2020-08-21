import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { TaskService } from '../../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private router: Router, private taskService: TaskService) {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    })
  }

  ngOnInit(): void {
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe(() => {
      console.log("Task deleted successfully.");
      this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
        this.router.navigate(['/taskDetails']);
    }); 
    },
    err => {
      console.log("Task not deleted successfully. Error due to: " + err);
    });
  }
}
