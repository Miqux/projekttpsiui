import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginResponse } from 'src/app/models/loginResponse';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    username = ""
    password = ""
    error : string = ""
    temp2 : loginResponse | undefined;
  
    constructor(private auth: AuthService, private router: Router) { }
    isLoggedIn$ = this.auth.isLoggedIn$;
    ngOnInit(): void {
    }
    login(){
      this.auth.login(this.username, this.password).subscribe((temp: loginResponse) => this.temp2 = temp);
      if(this.temp2?.message == "Zalogowano") {
        this.isLoggedIn$.next(true);
        this.auth.userId = this.temp2.id;
        this.router.navigate(['/edit']);       
        
      }
      else {
      this.error = "Złe login lub hasło!";
      }
     }
     logout(){
      this.isLoggedIn$.next(false);
    }
}
