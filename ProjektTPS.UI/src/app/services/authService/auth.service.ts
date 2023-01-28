import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { loginModel } from 'src/app/models/loginModel';
import { loginResponse } from 'src/app/models/loginResponse';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://localhost:7024/api/User";
  userId: number | undefined;
  constructor(private http: HttpClient) { }
  isLoggedIn$ = new BehaviorSubject(false);

  public login(username: string, password: string): Observable<loginResponse>{
    let par = new loginModel(password, username);
   
    return this.http.post<loginResponse>(`${this.url}/login`, par);
    }
    
  public logout(){
    this.isLoggedIn$.next(false);
    }
}
