import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  // create subject
  private cartCount=0;
  private cartCountsubject:BehaviorSubject<number>=new BehaviorSubject(this.cartCount);


  constructor() { }

  addTocart(){
    this.cartCount++;
    this.cartCountsubject.next(this.cartCount);
  }

  getcartCount(){
    return this.cartCountsubject;
  }
}
