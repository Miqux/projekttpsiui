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
  public createUser(user: User) : Observable<User[]>{
    return this.http.post<User[]>(`${this.url}`, user);
  }
  public deleteUser(user: User) : Observable<User[]>{
    return this.http.delete<User[]>(`${this.url}/${user.id}`);
  }
  public isLogged(username: string, password: string) : Observable<boolean>{
    console.log(username);
    console.log(password);
    console.log(`${this.url}/IsLogged`);
    let queryParams = new HttpParams();
    let par = new loginModel(username, password);
    queryParams = queryParams.append(username, password);
    if(this.http.post<boolean>(`${this.url}/IsLogged`,par)){
      console.log("tak");
    }else{
      console.log("nie");
    }
    return this.http.post<boolean>(`${this.url}/IsLogged`,par);
  }  
}
