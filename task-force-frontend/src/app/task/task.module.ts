import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskDetailComponent, 
    TaskEditComponent, 
    TaskListComponent, 
    TaskPageComponent, 
    TaskSearchComponent, 
    TaskCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskDetailComponent, 
    TaskEditComponent, 
    TaskListComponent, 
    TaskPageComponent, 
    TaskSearchComponent, 
    TaskCreateComponent,
  ]
})
export class TaskModule { }
