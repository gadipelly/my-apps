import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-pipes',
  templateUrl: './directives-pipes.component.html',
  styleUrls: ['./directives-pipes.component.css']
})
export class DirectivesPipesComponent {

  public ages:number[]=[10,20,30,40,50];

  public states:string[]=["telangana","andhra","kerala","UP"];

  public users:any=[
    {name:'a',age:20,phone:9494,marks:80},
    {name:'b',age:22,phone:8074,marks:50},
    {name:'c',age:25,phone:9666,marks:30},
    {name:'d',age:27,phone:9550,marks:120},
  ]

  public today:any=new Date();
}
