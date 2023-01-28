import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { addPostModel } from 'src/app/models/addPostModel';
import { AuthService } from 'src/app/services/authService/auth.service';
import { PostService } from 'src/app/services/postService/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  addPostModel: addPostModel;
  error : string = ""
  response : string = ""
  constructor(private auth: AuthService, private postService: PostService, private router: Router, private route: ActivatedRoute){
    this.addPostModel = new addPostModel()
  }

  ngOnInit(): void {    
  }
  addPost(){
    if(this.noWhitespaceValidator(this.addPostModel.tittle)){
      this.error = "Tytuł nie może być pusty!";
      return;
    }

    if(this.noWhitespaceValidator(this.addPostModel.text)){
      this.error = "Zawartość nie może być pusta!";
      return;
    }
    this.addPostModel.id = this.auth.userId;
    this.postService.postPosts(this.addPostModel).subscribe((temp: string) => this.response = temp);
    if (this.response == "Dodano"){
      this.router.navigate(['/home']).then(() => this.router.navigate(['/forum']));
    }else{
      this.router.navigate(['/home']).then(() => this.router.navigate(['/forum']));
    }
  }
  public noWhitespaceValidator(control: String) {
    const isWhitespace = (control || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

}
