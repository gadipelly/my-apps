import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup= new FormGroup(
    {
      name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      age: new FormControl('',[Validators.required, Validators.min(18), Validators.max(45)]),
      phone: new FormControl('',[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
      email: new FormControl('',[Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(25)]),
      address: new FormGroup({
      addressline: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required, Validators.min(100000), Validators.max(999999)]),
      state: new FormControl('',[Validators.required]),
    }
  ),
type: new FormControl(),
// busfee: new FormControl(),
// hostelfee: new FormControl(),
cards: new FormArray([])
    });

    get cardsFormArray(){
    return this.userForm.get('cards') as FormArray;
    }

    addcard(){

      this.cardsFormArray.push(
        new FormGroup({
          number: new FormControl('',[Validators.required]),
          expiry: new FormControl('',[Validators.required]),
          cvv: new FormControl(),
        })
      )
    }

    delete(i:number){
      this.cardsFormArray.removeAt(i);
    }

    constructor(){
      this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayshoolor'){
          this.userForm.addControl('busfee',new FormControl());
          this.userForm.removeControl('hostelfee');
        }
        else if(data='residential'){
          this.userForm.addControl('hostelfee',new FormControl());
          this.userForm.removeControl('busfee');
        }
      }
      )
    }

  submit(){
    console.log(this.userForm);
  }
  
}
