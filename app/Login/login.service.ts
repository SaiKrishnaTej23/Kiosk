import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import '../../node_modules/rxjs/add/operator/map'; 
@Injectable()
export class LoginService {

    constructor(private http:Http) { }

    login(username:string,password:string){
        return this.http.post('http://localhost:6087/api/account/login', {username: username,password:password})
            .map((response: Response) => response.json());
    }
}