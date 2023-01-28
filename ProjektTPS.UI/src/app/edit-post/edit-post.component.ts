import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { addPostModel } from '../models/addPostModel';
import { postDetails } from '../models/postDetails';
import { PostService } from '../services/postService/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  idPost: number = 0;
  private sub: any;
  postDetailsModel = new postDetails;
  addPostModel = new addPostModel;
  response = "";
  error = "";
  

constructor(private route: ActivatedRoute,private postService: PostService, private router: Router){}

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.idPost = +params['id'];
      
      
   });
   this.postService.getPost(this.idPost).subscribe((result: postDetails) => (this.postDetailsModel = result, console.log(result), console.log(this.postDetailsModel)));
   this.addPostModel.text = this.postDetailsModel.text;
   this.addPostModel.tittle = this.postDetailsModel.tittle;
   this.addPostModel.id = this.idPost;

}
ngOnDestroy() {
  this.sub.unsubscribe();
}
editPost(){
  this.addPostModel.text = this.postDetailsModel.text;
  this.addPostModel.tittle = this.postDetailsModel.tittle;
  if(this.noWhitespaceValidator(this.addPostModel.tittle)){
    this.error = "Tytuł nie może być pusty!";
    return;
  }

  if(this.noWhitespaceValidator(this.addPostModel.text)){
    this.error = "Zawartość nie może być pusta!";
    return;
  }
  this.postService.updatePost(this.addPostModel).subscribe((temp: string) => this.response = temp);
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
