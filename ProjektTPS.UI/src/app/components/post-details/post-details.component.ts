import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postDetails } from 'src/app/models/postDetails';
import { AuthService } from 'src/app/services/authService/auth.service';
import { PostService } from 'src/app/services/postService/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
    id: number = 0;
    private sub: any;
    postDetailsModel = new postDetails;
    result = "";
    userId = this.auth.userId;
    constructor(private route: ActivatedRoute,  private postService: PostService, private router: Router, private auth: AuthService){}

    ngOnInit(){
      this.sub = this.route.params.subscribe(params => {
        this.id = +params['id'];
     });

      this.postService.getPost(this.id).subscribe((result: postDetails) => (this.postDetailsModel = result));
    }
    ngOnDestroy() {
      this.sub.unsubscribe();
    }
    deletePost(){
      this.postService.deletePost(this.id).subscribe((result: string) => (this.result = result))      
      this.router.navigate(['/home']).then(() => this.router.navigate(['/forum']));
    }
    editPost(){
      
    }
}
