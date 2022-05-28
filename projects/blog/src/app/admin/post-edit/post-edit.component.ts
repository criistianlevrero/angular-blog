import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  public postId: string | undefined;

  postName = new FormControl('');
  postVisibility = new FormControl('');

  constructor(private _activatedRoute :ActivatedRoute) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.postId = params["postId"];
    });

    //this.name.setValue('Nancy'); pa cuando vengan datos

  }



}
