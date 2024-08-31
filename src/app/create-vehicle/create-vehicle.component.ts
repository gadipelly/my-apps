import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  public id:string="";
 
  public vehicleForm:FormGroup = new FormGroup({

    vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),  
  })

  constructor(private _vehicleservice:VehicleService, private _activatedRoute:ActivatedRoute){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id = data.id;
  
        _vehicleservice.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  }


  
create(){
  console.log(this.vehicleForm.value);

  if(this.id){
    // edit
   this._vehicleservice.updateVehicles(this.vehicleForm.value, this.id).subscribe(
     (data:any)=>{
      alert("updated successfully");
      this.vehicleForm.reset();
     },
     (err:any)=>{
      alert("update faild")
     }
    )
  }
  else{
    //create
    this._vehicleservice.createVehicles(this.vehicleForm.value).subscribe(
      (data:any)=>{
       alert(" create successfully");
       this.vehicleForm.reset();
      },
      (err:any)=>{
       alert("create faild")
      }
     )
   }
  }
}



