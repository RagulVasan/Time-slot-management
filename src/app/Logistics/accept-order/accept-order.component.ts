import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../Logistics-Services/order.service';
import { Appointment } from 'src/app/Admin/Admin-models/appointment.model';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Order } from '../Logistics-Model/order.model';
import { compileBaseDefFromMetadata } from '@angular/compiler';

interface Slot {
  slot_details: string;
}

@Component({
  selector: 'app-accept-order',
  templateUrl: './accept-order.component.html',
  styleUrls: ['./accept-order.component.css']
})
export class AcceptOrderComponent implements OnInit {
  form:FormGroup;
  timeslotdetails={
    "nine":"09:00",

    "ten":"10:00",

    "eleven":"11:00",

    "one":"01:00",
  
    "two":"02:00",
  
    "three":"03:00",
  
    "four":"04:00",
  
    "five":"05:00",
  };
  orderdetails:any;
  selectedslot:Slot;
  slots:Slot[]=[];
  timeslots:Slot[]=[];
  istimeslotavailable: boolean;
  isavailable: boolean;
  slot_details:any;
  slotId:string;
  timeslot:string;
  mode: string;
  oldslot:string;
  oldtimeslot:string;
  oldtime:string;
  logisticsorder:any;

  constructor(public OrderService:OrderService,public router:ActivatedRoute) { }

  ngOnInit() {
    this.form=new FormGroup({
      timeslot:new FormControl(null,{validators:[Validators.required]}),
      slot:new FormControl(null,{validators:[Validators.required]}),
      orderId:new FormControl(null,{validators:[Validators.required,Validators.minLength(4)]}),
      companyName: new FormControl(null,{validators:[Validators.required,Validators.minLength(4)]}),
      date:new FormControl(null,{validators:[Validators.required]}),
      storename: new FormControl(null,{validators:[Validators.required]}),
      landmark: new FormControl(null,{validators:[Validators.required]}),
      location: new FormControl(null,{validators:[Validators.required]}),
      vehicleNo: new FormControl(null,{validators:[Validators.required]}),
      driverName:new FormControl(null,{validators:[Validators.required]}),
    });
    this.router.paramMap.subscribe((parammap:ParamMap)=>{
      if(parammap.has("orderId"))
        { 
          this.mode="update";
          this.OrderService.getorder(parammap.get("orderId")).subscribe(responseData=>{
            this.logisticsorder=responseData;
            this.isavailable=true;
            this.oldslot=responseData.slot;
            this.oldtimeslot=Object.keys(this.timeslotdetails).find(key =>
              this.timeslotdetails[key] === responseData.timeslot);
            this.OrderService.getslotdetails(responseData.date).subscribe(responsedata=>{
              this.slot_details=responsedata;
              this.slotId=responsedata._id;
              var keys=Object.keys(responsedata);
              for(let i=2;i<keys.length;i++)
              {
                if(responsedata[keys[i]].availableslots>0)
                {
                  this.selectedslot={slot_details:this.timeslotdetails[keys[i]]};
                  this.timeslots.push(this.selectedslot);
                }
                  this.isavailable=true;
              }
            });            
             this.form.setValue({
               orderId:responseData.orderId,
               date:responseData.date,
               companyName:responseData.companyName,
               storename:responseData.storename,
               slot:"",
               timeslot:"",
               vehicleNo:responseData.vehicleNo,
               driverName:responseData.driverName,
               location:responseData.location,
               landmark:responseData.landmark,
             });
             this.isavailable=true;
           });
        }
      else
      {
        this.mode="create";
      }      
    });
  }
  onverify()
  {
    let count=0;
    this.OrderService.getorderdetails(this.form.value.orderId).subscribe(responseData=>{
      this.orderdetails=responseData;
      console.log(responseData);
      console.log(this.orderdetails);
      
      if(responseData.bookingstatus=="Not Booked"){
        this.form.setValue({
          orderId:responseData.orderId,
          slot:"",
          timeslot:"",
          vehicleNo:"",
          driverName:"",
          location:responseData.location,
          landmark:responseData.landmark,
          storename:responseData.storename,
          companyName:responseData.companyName,
          date:responseData.date,
        });
      this.OrderService.getslotdetails(this.form.value.date).subscribe(responsedata=>{
        this.slot_details=responsedata;
        this.slotId=responsedata._id;
      
        var keys=Object.keys(responsedata);
        for(let i=2;i<keys.length;i++)
        {
          if(responsedata[keys[i]].availableslots>0)
          {
            this.selectedslot={slot_details:this.timeslotdetails[keys[i]]};
            this.timeslots.push(this.selectedslot);
          }
          this.isavailable=true;
        } 
      });
    }  
    });
    
  }
  isvalid()
  {
   this.slots=[]; 
    if(this.form.value.timeslot)
      {
        console.log(this.form.value.timeslot);
        this.timeslot=Object.keys(this.timeslotdetails).find(key =>
      this.timeslotdetails[key] === this.form.value.timeslot.slot_details);
      var keys=Object.keys(this.slot_details[this.timeslot].slot);
      for(var i=0;i<keys.length;i++)
      {
        if(this.slot_details[this.timeslot].slot[keys[i]]==="Not Booked"){
          this.selectedslot={slot_details:keys[i]};
          this.slots.push(this.selectedslot);
        }
      }
      this.istimeslotavailable=true;
      }
    else
      this.istimeslotavailable=false;
  }
  onacceptorder()
  {
    console.log(this.timeslot);
    if(this.mode==="update")
    {
        this.OrderService.updateorder(this.slotId,this.oldtimeslot,this.oldslot,this.timeslot,this.form.value.timeslot.slot_details,this.form.value.slot.slot_details,this.logisticsorder);
    }
    else
    this.OrderService.selectloadingslot(this.slotId,this.timeslot,this.form.value.timeslot.slot_details,this.form.value.slot.slot_details,this.form.value.vehicleNo,this.form.value.driverName,this.orderdetails);
  }

}
