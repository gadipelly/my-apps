import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-viewaccount',
  templateUrl: './viewaccount.component.html',
  styleUrls: ['./viewaccount.component.css']
})
export class ViewaccountComponent {

  public account:any = {};

  constructor(private _activateRoute:ActivatedRoute, private _accountService:AccountService){

    _activateRoute.params.subscribe(
      (data:any)=>{

        _accountService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account = data;
            console.log(data.id);

            _accountService.getAccount(data.id).subscribe(
              (data:any)=>{
                this.account = data;
              }
            )
          }
        )
      }
    )
  }
}
