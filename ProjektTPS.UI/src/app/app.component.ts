import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjektTPS.UI';
  users:  User[] = [];
  userToEdit?: User;

  constructor(private userService: UserService) {}

  ngOnInit() : void {
      this.userService.getUser().subscribe((result : User[]) => (this.users = result));
  }
  updateUserList(users: User[]){
    this.users = users;
  }
  initNewUser(){
    this.userToEdit = new User();
  }
  editUser(user: User){
    this.userToEdit = user;
  }
}
