import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private TextSubject:BehaviorSubject<Text> =new BehaviorSubject(0);
  private TimeSubject:BehaviorSubject<Time> =new BehaviorSubject(0);

  constructor() { 

  
  setText(value:number){
    this.countSubject.next(value);
  }


  getText(){
    return this.countSubject;
  }

  setTime(value:number){
    this.countSubject.next(value);
  }

  getTime(){
    return this.countSubject;
  }
  }
}
