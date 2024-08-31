import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  public Length:number=0;
  public Breadth:number=0;
  public result:number=0;

  area(){
    this.result=this.Length * this.Breadth;
  }
  perameter(){
    this.result= 2 *(this.Length + this.Breadth); 
  }
}
