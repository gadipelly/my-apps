import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.css']
})
export class ViewvehicleComponent {

  public vehicle:any = {};

  constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VehicleService){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        
        _vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
               this.vehicle = data;
               console.log(data)
          }
        )
      }
    )
  }

}
