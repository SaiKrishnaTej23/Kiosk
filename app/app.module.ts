//modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http'
import {LoginModule} from './Login/login.module'
import {RoutingModule, routedComponents} from './app.routing';
// components
import { AppComponent }  from './app.component';

// services
import {  AppService} from './app.service';
@NgModule({
  imports: [ BrowserModule,HttpModule,JsonpModule,LoginModule, RoutingModule ],
  declarations: [ AppComponent ],
  providers:[AppService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
