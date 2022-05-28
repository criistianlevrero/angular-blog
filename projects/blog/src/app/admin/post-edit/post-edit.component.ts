import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { PostsService } from '../../shared/services/posts/posts.service';
import { Post } from '../../shared/interfaces/posts';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  postIdParam: number | undefined | string;

  postName = new FormControl('');
  postPublished = new FormControl('');

  isNewPost = true;

  postModel: Post = {
    postContent: '',
    postId: 0,
    postPublished: false,
    postTitle: '',
  };

  constructor(private _activatedRoute :ActivatedRoute, private _postService :PostsService) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      const paramsPostId = params["postId"];
      this.postIdParam = paramsPostId

      if (paramsPostId !== 'new') {
        this._postService.getSingle(paramsPostId as number).subscribe(
          (post)=> this.onGetPost(post)
        );
      }

    });

  }

  onGetPost(postData:Post):void {
    this.postModel = postData;
    this.postName.setValue(this.postModel.postTitle);
    this.postPublished.setValue(this.postModel.postPublished);
    this.isNewPost = false;
  }



}
