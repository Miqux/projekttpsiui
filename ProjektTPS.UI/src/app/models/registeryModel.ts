export class registeryModel{
    Login = "";
    Password = "";
    Name = "";
    LastName = "";

    constructor(pass: string, log: string){
        this.Login = log;
        this.Password = pass;
    }
}