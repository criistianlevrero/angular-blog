import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostEditComponent } from './post-edit/post-edit.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PostEditComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
