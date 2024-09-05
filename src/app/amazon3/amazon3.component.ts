import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon3',
  templateUrl: './amazon3.component.html',
  styleUrls: ['./amazon3.component.css']
})
export class Amazon3Component {

  public cartCount:number =0;

  constructor(private _amazonService:AmazonService){

    _amazonService.getcartCount().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }
}