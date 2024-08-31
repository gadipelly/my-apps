import { Component } from '@angular/core';

@Component({
  selector: 'app-cricle',
  templateUrl: './cricle.component.html',
  styleUrls: ['./cricle.component.css']
})
export class CricleComponent {
public radius:number=0;
public result:number=0;

area(){
 this.result =this.radius * this.radius;
}
perameter(){
  this.result = 2 *Math.PI * this.radius;
}
}
