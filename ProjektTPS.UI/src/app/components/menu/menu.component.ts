import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  error = false;
  constructor(private auth: AuthService, private router: Router) { }

  isLoggedIn$ = this.auth.isLoggedIn$;
  ngOnInit(): void {}
  logout(){
  this.isLoggedIn$.next(false);
  }
}
