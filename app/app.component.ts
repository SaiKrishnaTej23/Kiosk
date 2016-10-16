import { Component, OnInit } from '@angular/core';
import { AppService} from './app.service';
import { Users } from './Users';
@Component({
    selector: 'my-app',
    template: `
 <router-outlet></router-outlet>
    
    `
})
export class AppComponent implements OnInit {
    UserDetails:Array<Users>;
    errorMessage: any;
    constructor(private users:AppService){

    }
    ngOnInit(){
        this.getUsers();
    }
    getUsers(){
        this.users.getusers().subscribe(
                       heroes => this.UserDetails = heroes,
                       error =>  this.errorMessage = <any>error);
    }
 }
