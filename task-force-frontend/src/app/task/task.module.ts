import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { FormsModule } from '@angular/forms';
import { TaskCardComponent } from './task-card/task-card.component';



@NgModule({
  declarations: [
    TaskDetailComponent, 
    TaskListComponent, 
    TaskPageComponent, 
    TaskSearchComponent, 
    TaskCreateComponent, 
    TaskCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskDetailComponent, 
    TaskListComponent, 
    TaskPageComponent, 
    TaskSearchComponent, 
    TaskCreateComponent,
    TaskCardComponent,
  ]
})
export class TaskModule { }
