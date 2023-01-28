import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registery',
  templateUrl: './registery.component.html',
  styleUrls: ['./registery.component.css']
})
export class RegisteryComponent implements OnInit{
  registerym: User;
  error : string = ""
  temp2 : string = ""
  constructor(private userService: UserService, private router: Router){
    this.registerym = new User()
  }
  ngOnInit(): void {
  }
  registery(){
    this.error = "";
      if(this.noWhitespaceValidator(this.registerym.Name)){
        this.error = "Nick nie może być pusty!";
        return;
      }

      if(this.noWhitespaceValidator(this.registerym.FirstName)){
        this.error = "Imię nie może być puste!";
        return;
      }
      if(this.noWhitespaceValidator(this.registerym.LastName)){
        this.error = "Nazwisko nie może być puste!";
        return;
      }
      if(this.noWhitespaceValidator(this.registerym.Place)){
        this.error = "Miasto nie może być puste!";
        return;
      }
      if(this.noWhitespaceValidator(this.registerym.Login)){
        this.error = "Login nie może być pusty!";
        return;
      }
      if(this.noWhitespaceValidator(this.registerym.Password)){
        this.error = "Hasło nie może być puste!";
        return;        
      }
      this.userService.createUser(this.registerym).subscribe((temp: string) => this.temp2 = temp);
      if(this.temp2 == "Dodano"){
        this.router.navigate(['/home']);
      }else{
        this.error = "Użytkownik o podanej nazwie już istnieje!";
        return;  
      }
    }

  public noWhitespaceValidator(control: String) {
      const isWhitespace = (control || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
  }
}

