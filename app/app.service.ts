import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import '../node_modules/rxjs/add/operator/map'; 
@Injectable()
export class AppService {

    constructor(private http:Http) {

     }
     getusers(){
return this.http.get('http://localhost:6087/api/users/')
    .map((response: Response) => response.json());
     }

}