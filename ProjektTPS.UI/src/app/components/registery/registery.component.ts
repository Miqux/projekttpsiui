import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registery',
  templateUrl: './registery.component.html',
  styleUrls: ['./registery.component.css']
})
export class RegisteryComponent implements OnInit{
  registerym: User;
  constructor(private userService: UserService){
    this.registerym = new User()
  }
  ngOnInit(): void {
  }
  registery(){
      this.userService.getUser()
    }
}

