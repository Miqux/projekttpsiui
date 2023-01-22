import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { loginModel } from 'src/app/models/loginModel';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://localhost:7024/api/User";
  constructor(private http: HttpClient) { }
  isLoggedIn$ = new BehaviorSubject(false);

  public login(username: string, password: string): Observable<string>{
    let par = new loginModel(password, username);
   
    return this.http.post(`${this.url}/login`,par ,{responseType :'text'});
    }
    
  public logout(){
    this.isLoggedIn$.next(false);
    }
}
