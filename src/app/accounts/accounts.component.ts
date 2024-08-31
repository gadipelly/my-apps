import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
 public accounts:any=[];
 public term:string="";

 public column:string="";
 public order:string="";

 public count:any="";
 public page:any="";

 constructor(private _accountservice:AccountService,private _router:Router){
  _accountservice.getaccounts().subscribe(
    (data:any)=>{
      console.log(data)
      this.accounts = data;
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
 }
 filter(){
  this._accountservice.getfilteredaccounts(this.term).subscribe(
    (data:any)=>{
    console.log(data);
      this.accounts=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
 }
 sort(){
  this._accountservice.getsortaccounts(this.column,this.order).subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
 }
 limit(){
  this._accountservice.getlimitaccounts(this.count,this.page).subscribe(
    (data:any)=>{
      this.accounts=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
 }

 view(id:string){
 this._router.navigateByUrl("/dashboard/viewaccount/"+id);
 }

 edit(id:string){
  this._router.navigateByUrl("/dashboard/editaccount/"+id);
 }
}


