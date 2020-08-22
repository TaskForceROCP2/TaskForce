import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  @Input() task$: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task).subscribe(() => {
      console.log("Task updated successfully.");
    },
      err => {
        console.log(err);
      });
  }

  toggleComplete(task: Task) {
    if (task.completed) {
      this.markUncomplete(task);
    } else {
      this.markComplete(task);
    }
  }

  markComplete(task: Task) {
    this.taskService.patchTask(task.id).subscribe(() => {
      console.log("Task marked completed successfully.");
    },
      err => {
        console.log(err);
      });
  }

  markUncomplete(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task).subscribe(() => {
      console.log("Task marked uncompleted successfully.");
    },
      err => {
        console.log(err);
      });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe(() => {
      console.log("Task deleted successfully.");
    },
      err => {
        console.log(err);
      });
  }
}
