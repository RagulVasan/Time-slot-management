import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppointmentService } from '../Admin-Services/appointment.service';
import { Appointment } from '../Admin-models/appointment.model';
@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {
  private mode="appointment";
  appointment:Appointment;
  appointmentid:string;
  form:FormGroup;  
  constructor(public appointmentService:AppointmentService,public route:ActivatedRoute) { }

  ngOnInit() {
    this.form=new FormGroup({
      orderId:new FormControl(null,{validators:[Validators.required,Validators.minLength(4)]}),
      companyName: new FormControl(null,{validators:[Validators.required,Validators.minLength(4)]}),
      date:new FormControl(null,{validators:[Validators.required]}),
      storename: new FormControl(null,{validators:[Validators.required]}),
      landmark: new FormControl(null,{validators:[Validators.required]}),
      location: new FormControl(null,{validators:[Validators.required]}), 
    });
    this.route.paramMap.subscribe((parammap:ParamMap)=>{
      this.appointmentid=parammap.get("appointmentid")
      if(parammap.has("appointmentid")){
        this.mode="edit";
        this.appointmentService.getappointment(this.appointmentid).subscribe(appointmentdata=>{
          console.log(appointmentdata.orderId);
            this.appointment={
              id:appointmentdata._id,
              companyName:appointmentdata.companyName,
              date:appointmentdata.date,
              orderId:appointmentdata.orderId,
              landmark:appointmentdata.landmark,
              location:appointmentdata.location,
              storename:appointmentdata.storename,
              bookingstatus:appointmentdata.bookingstatus,
                  };
            this.form.setValue({
              orderId:this.appointment.orderId,
              companyName:this.appointment.companyName,
              date:new Date(this.appointment.date),
              landmark:this.appointment.landmark,
              location:this.appointment.location,
              storename:this.appointment.storename,
            });           
        });        
      }
      else{
        this.mode="create";        
      }
      
    });
  }
  saveAppointment(){
    console.log("save appointment");
    const date=new Date(this.form.value.date);
    const newdate=date.toString();
    if(this.form.invalid)
    {
      return;
    }
    if(this.mode==="create")
      this.appointmentService.saveappointment(
        this.form.value.orderId,
        this.form.value.companyName,
        newdate.slice(4,15),
        this.form.value.storename,
        this.form.value.landmark,
        this.form.value.location,
        "Not Booked"
      ); 
    else
      this.appointmentService.updateappointment(
        this.appointmentid,
        this.form.value.orderId,
        this.form.value.companyName,
        newdate.slice(4,15),
        this.form.value.storename,
        this.form.value.landmark,
        this.form.value.location,
        this.appointment.bookingstatus,
        );    
}
}
