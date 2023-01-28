import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "https://localhost:7024/api/User";
  
  constructor(private http : HttpClient) { }

  public getUser() : Observable<User[]>{
    return this.http.get<User[]>(`${this.url}`);
  }
  public updateUser(user: User) : Observable<User[]>{
    return this.http.put<User[]>(`${this.url}`, user);
  }
  public createUser(user: User) : Observable<string>{  
    return this.http.post(`${this.url}`, user, {responseType :'text'});
  }
  public deleteUser(user: User) : Observable<User[]>{
    return this.http.delete<User[]>(`${this.url}/${user.Id}`);
  }
}