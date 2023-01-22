import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService
      .getUser()
      .subscribe((result: User[]) => (this.users = result));
  }
}
