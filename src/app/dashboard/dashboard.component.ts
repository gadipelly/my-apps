import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _router:Router){}

  logout(){
    // remove the token
    sessionStorage.removeItem("token");
    // go to login
    this._router.navigateByUrl("/login");
  }
}
