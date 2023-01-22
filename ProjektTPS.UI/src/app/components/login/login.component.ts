import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    temp2 : string = ""
  
    constructor(private auth: AuthService, private router: Router) { }
    isLoggedIn$ = this.auth.isLoggedIn$;
    ngOnInit(): void {
    }
    login(){
      this.auth.login(this.username, this.password).subscribe((temp: string) => this.temp2 = temp);
      console.log(this.temp2);
      if(this.temp2 == "Zalogowano") {
        this.isLoggedIn$.next(true);
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
