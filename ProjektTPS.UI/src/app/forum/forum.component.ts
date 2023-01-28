import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { post } from '../models/post';
import { AuthService } from '../services/authService/auth.service';
import { PostService } from '../services/postService/post.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent{
  posts: post[] = [];
  userId = this.auth.userId;
  isLoggedIn$ = this.auth.isLoggedIn$;
  result = "";

  constructor(private auth: AuthService, private postService: PostService){}

  ngOnInit(): void {
    this.postService
    .getPosts()
    .subscribe((result: post[]) => (this.posts = result));
  }
  checkIf(id: number){
    if (id == this.userId)
      true;
    else
      false;
  }
}
