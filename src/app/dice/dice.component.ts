import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  public imageUrl:string='./assets/dice.png';

  roll(){
    const digit= Math.floor(Math.random() * 6)+1;
    this.imageUrl=`/assets/dice${digit}.png`;
  }
}
