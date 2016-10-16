import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { LoginComponent }   from './login.component';
import { LoginService }   from './login.service';

@NgModule({
    imports: [FormsModule,CommonModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [LoginService],
})
export class LoginModule { }
