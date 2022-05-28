import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last, map, Observable } from 'rxjs';
import { Post } from '../../interfaces/posts';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  configUrl = 'http://localhost:3000/posts';
  posts: Observable <Post[]>;

  constructor(private http: HttpClient) {
    this.posts = this.http.get<Post[]>(this.configUrl);
  }

  getAll(): Observable<Post[]> {
    return this.posts;
  }

  getSingle(id:number): Observable<Post> {
    return this.posts.pipe(
      map((posts) => posts.filter((post: Post)=> post.postId == id )[0]),
      last()
    );
  }
}
