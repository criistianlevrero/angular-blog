import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/interfaces/posts';
import { PostsService } from '../../shared/services/posts/posts.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {
  displayedColumns: string[] = ['postId', 'postTitle', 'postPublished', 'edit'];

  allPosts!: Post[];

  constructor(private _postService :PostsService) { }

  ngOnInit() {
    this._postService.getAll().subscribe({
      next: (post)=> this.allPosts = post,
      error: (error)=> window.alert('DB connection error')
    });
  }

  onClickItem(element: any):void {
    console.log(element);
  }
}
