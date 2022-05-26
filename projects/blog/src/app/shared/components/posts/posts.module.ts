import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostEditorComponent } from './post-editor/post-editor.component';



@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostDashboardComponent,
    PostEditorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
