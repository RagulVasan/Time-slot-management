import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Logistics-Services/order.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-vehicle-details',
  templateUrl: './update-vehicle-details.component.html',
  styleUrls: ['./update-vehicle-details.component.css']
})
export class UpdateVehicleDetailsComponent implements OnInit {
  form: FormGroup;
  order:any;
  id:string;
  constructor(public orderService:OrderService,public router:ActivatedRoute) { }

  ngOnInit() {    
    this.form=new FormGroup({
      vehicleNo: new FormControl(null,{validators:[Validators.required]}),
      driverName:new FormControl(null,{validators:[Validators.required]}),
    });
    this.router.paramMap.subscribe((parammap:ParamMap)=>{
      this.id=parammap.get("orderId");
      this.orderService.getorder(parammap.get("orderId")).subscribe(responseData=>{
        this.order=responseData;
        this.form.setValue({
          vehicleNo:responseData.vehicleNo,
          driverName:responseData.driverName,
        });
      })
    });
  }
  onupdateorder()
  {
    var updatedvehicledetails={
      orderId:this.order.orderId,
      companyName:this.order.companyName,
      date:this.order.date,
      slot:this.order.slot,
      timeslot:this.order.timeslot,
      storename:this.order.storename,
      location:this.order.location,
      landmark:this.order.landmark,
      vehicleNo:this.form.value.vehicleNo,
      driverName:this.form.value.driverName
    }
    console.log(updatedvehicledetails);
    this.orderService.onupdateorder(this.id,updatedvehicledetails);
  }

}
