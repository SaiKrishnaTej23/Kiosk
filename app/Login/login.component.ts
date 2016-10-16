import { Component, OnInit,HostListener, ViewChild, ElementRef } from '@angular/core';
import {Login} from './login';
import {Register}  from './register';
import  {LoginService} from './login.service'
@Component({
    moduleId: module.id,
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
 login:Login = new Login("","");
 register:Register = new Register("","","");
 isValidUser : boolean;
 errorMessage:any;
    constructor(private loginservice : LoginService) { }
    trylogin(){
        this.loginservice.login(this.login.Username,this.login.Password).subscribe(
                       heroes => this.isValidUser = heroes,
                       error =>  this.errorMessage = <any>error);

                       if(this.isValidUser){
                           alert("logged in");
                       }
    }
    tryregister(){

    }

    ngOnInit() { }
}