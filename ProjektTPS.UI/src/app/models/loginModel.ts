export class loginModel{
    Login = "";
    Password = "";
    constructor(pass: string, log: string){
        this.Login = log;
        this.Password = pass;
    }
}