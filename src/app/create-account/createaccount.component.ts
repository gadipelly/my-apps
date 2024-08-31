import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  public id:string ="";

  public accountForm:FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profile_picture: new FormControl()
  })

constructor(private _accountservice:AccountService, private _activatedRoute:ActivatedRoute){

  _activatedRoute.params. subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id = data.id;

      _accountservice.getAccount(data.id).subscribe(
       (data:any)=>{
        this.accountForm.patchValue(data);
       }
      )
    }
  )
}

createaccount(){
  console.log(this.accountForm.value)

  if(this.id){
// edit
 this._accountservice.createaccounts(this.accountForm.value).subscribe(
  (data:any)=>{
    alert(" updated successfully!!!!");
    this.accountForm.reset();
  },
  (err:any)=>{
    alert("update faild");
  }
 )
}
  else{
    // create
 this._accountservice.createaccounts(this.accountForm.value).subscribe(
  (data:any)=>{
    alert(" create successfully!!!!");
    this.accountForm.reset();
  },
  (err:any)=>{
    alert("create faild");
  }
 )
}
  }
}
