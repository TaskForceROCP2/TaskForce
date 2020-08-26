import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { TaskService } from '../../task.service';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  tasks: Task[];
  

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
  //   this.taskService.getTasks().subscribe((tasks) => {
  //     this.tasks = tasks;
  //  })
  }

  ngOnInit(): void {
    let term = this.route.snapshot.queryParamMap.get("search");
    console.log (term);
    if (term) {
      this.taskService.searchTask(term).subscribe((tasks) => {
        this.tasks = tasks;
    })}
    else this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

}
