import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AngularModule } from './modules/angular.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';



@NgModule({
  declarations: [
    DashboardComponent,
    PostEditComponent,
    AdminLayoutComponent,
  ],
  imports: [
    CommonModule,
    AngularModule,
    RouterModule,
    CKEditorModule
  ]
})
export class AdminModule { }
