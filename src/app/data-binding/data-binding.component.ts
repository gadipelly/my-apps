import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
public age:number=20;
public name:string= "Mohith";
public address:string=" 1-7-5/1 dsnr,hyderabad,500052";
public isIndian:boolean=true;

public isVaild:boolean=false;
public url:string= "/assets/404.png";

public phone:string="+91";

submit(){
  alert("submitted!!!!!!!!!!!");
}
typing(){
  alert("typing......");
}
saved(){
  alert("saved..");
}



}
