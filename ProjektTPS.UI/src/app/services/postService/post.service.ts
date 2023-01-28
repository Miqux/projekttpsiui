import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { addPostModel } from 'src/app/models/addPostModel';
import { post } from 'src/app/models/post';
import { postDetails } from 'src/app/models/postDetails';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://localhost:7024/api/Post";

  constructor(private http : HttpClient) { }

  public getPosts() : Observable<post[]>{
    return this.http.get<post[]>(`${this.url}`);
  }
  public postPosts(addPostModel: addPostModel) : Observable<string>{
    return this.http.post<string>(`${this.url}`, addPostModel);
  }
  public getPost(id: number) : Observable<postDetails>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.http.get<postDetails>(`${this.url}/postdetails`,{params:queryParams});
  }
  public deletePost(id: number) : Observable<string>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.http.delete<string>(`${this.url}`,{params:queryParams});
  }
  public updatePost(addPostModel: addPostModel) : Observable<string>{
    return this.http.put<string>(`${this.url}`,addPostModel);
  }
}