import { Component } from '@angular/core';
import { EmailValidator, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent {

  public userForm:FormGroup= new FormGroup(
    {
      name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      class: new FormControl('',[Validators.required]),
      fathername: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      dob: new FormControl('',[Validators.required]),
      address: new FormGroup({
      city: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required, Validators.min(100000), Validators.max(999999)]),
      }),
     
      type: new FormControl(),
      // busfee: new FormControl(),
      // hostelfee: new FormControl(),
     marks: new FormArray([])
    });

    get marksFormArray(){
      return this.userForm.get('marks')as FormArray;
    }

    Addmarks(){

      this.marksFormArray.push(
        new FormGroup({
          class: new FormControl('',[Validators.required]),
          year: new FormControl('',[Validators.required]),
          percentage: new FormControl('',[Validators.required]),
        })
      )
    }
      delete(i:number){
        this.marksFormArray.removeAt(i);
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
        console.log( this.userForm);
      }
  
     }
  
