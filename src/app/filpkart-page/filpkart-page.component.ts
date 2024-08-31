import { Component } from '@angular/core';
import { FilpkartPageService } from '../filpkart-page.service';

@Component({
  selector: 'app-filpkart-page',
  templateUrl: './filpkart-page.component.html',
  styleUrls: ['./filpkart-page.component.css']
})
export class FilpkartPageComponent {

  public filpkartpages:any =[];

  constructor(private _filpkartPageService:FilpkartPageService){
    _filpkartPageService.getfilpkartpage().subscribe(
      (data:any)=>{
        this.filpkartpages=data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

}
