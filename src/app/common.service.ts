import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // create subject

private countSubject:BehaviorSubject<number> =new BehaviorSubject(0);

  constructor() { }

  // set value
  setCount(value:number){
    this.countSubject.next(value);
  }

  // get value
  getCount(){
    return this.countSubject;
  }

  // ===============================================================

  private cartCount=0;
  private cartCountsubject:BehaviorSubject<number>=new BehaviorSubject(this.cartCount);


  addTocart(){
  this.cartCount++;
  this.cartCountsubject.next(this.cartCount);
  }

  getcartCount(){
    return this.cartCountsubject;
  }
}
