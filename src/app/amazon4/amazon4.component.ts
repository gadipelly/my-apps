import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon4',
  templateUrl: './amazon4.component.html',
  styleUrls: ['./amazon4.component.css']
})
export class Amazon4Component {

  public cartCount:number =0;

  constructor(private _amazonService:AmazonService){

    _amazonService.getcartCount().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }
}
