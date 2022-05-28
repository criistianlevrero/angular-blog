import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { MaterialModule } from './modules/material.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    PostEditComponent,
    AdminLayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    CKEditorModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
