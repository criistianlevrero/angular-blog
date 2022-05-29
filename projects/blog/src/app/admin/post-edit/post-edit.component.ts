import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from '../../shared/services/posts/posts.service';
import { Post } from '../../shared/interfaces/posts';
import { Breadcrumb } from '../components/breadcrumb/breadcrumb';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  postIdParam: number | undefined | string;

  formGroup = new FormGroup({
    postName: new FormControl(''),
    postPublished: new FormControl(''),
  });

  isNewPost = true;

  postModel: Post = {
    postContent: '',
    postId: 0,
    postPublished: true,
    postTitle: '',
  };

  breadcrumb: Breadcrumb[] = [
    { label: "Dashboard", route: "/admin" },
    { label: "Post edit" },
  ]

  constructor(private _activatedRoute :ActivatedRoute, private _postService :PostsService) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      const paramsPostId = params["postId"];
      this.postIdParam = paramsPostId

      if (paramsPostId !== 'new') {
        this._postService.getSingle(paramsPostId as number).subscribe({
          next: (post)=> this.onGetPost(post),
          error: (error)=> window.alert('DB connection error')
        }
        );
      }

    });
  }

  onGetPost(postData:Post):void {
    this.postModel = postData;
    this.formGroup.setValue({
      postName: this.postModel.postTitle,
      postPublished: this.postModel.postPublished
    });
    this.isNewPost = false;
  }

  onSubmit(){
    console.log(this.formGroup.value)
  }

}
