import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm:FormGroup =  new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })
  constructor(private _loginService:LoginService,private _router:Router){}

  login(){
    console.log(this.loginForm);
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login success");
        // store the token
        sessionStorage.setItem("token",data.token);
        //go to dashboard
        this._router.navigateByUrl("/dashboard")
      },
      (err:any)=>{
        alert("invaild credentials");
      }
    )
  }


}
