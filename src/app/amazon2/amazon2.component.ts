import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon2',
  templateUrl: './amazon2.component.html',
  styleUrls: ['./amazon2.component.css']
})
export class Amazon2Component {
  
  public cartCount:number =0;

  constructor(private _amazonService:AmazonService){

    _amazonService.getcartCount().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }
}