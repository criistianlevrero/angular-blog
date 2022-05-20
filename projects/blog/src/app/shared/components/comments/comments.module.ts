import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';
import { CommentsListComponent } from './comments-list/comments-list.component';



@NgModule({
  declarations: [
    CommentComponent,
    CommentsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentsModule { }
