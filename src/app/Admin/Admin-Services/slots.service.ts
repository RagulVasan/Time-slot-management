import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlotsService {
  slot={
    date:"",
    nine:{},
    ten:{},
    eleven:{},
    one:{},
    two:{},
    three:{},
    four:{},
    five:{}  

  }
  Slotdetails={
      slot:{},
      time:{},
      orderId:{},
      availableslots:0
  };
  constructor(private http: HttpClient,private router:Router) { }

  generateslots(date:string){
    var loadslots={};
    var timeslots={};
    var orderId={};
     for(let i=0;i<4;i++)
     {
      loadslots['slot '+(i+1)]="Not Booked";
      timeslots['slot '+(i+1)]="Not Booked";
      orderId['slot '+(i+1)]="Not Booked";
    }
    
    this.Slotdetails={
      slot:loadslots,
      time:timeslots,
      orderId:orderId,
      availableslots:4
    };
    this.slot={
      date:date,
      one:this.Slotdetails,
      two:this.Slotdetails,
      three:this.Slotdetails,
      four:this.Slotdetails,
      five:this.Slotdetails,
      nine:this.Slotdetails,
      ten:this.Slotdetails,
      eleven:this.Slotdetails     
    }
    console.log(this.slot);
    this.http.post("http://localhost:3000/slots",this.slot)
    .subscribe(
      responseData => {
        this.router.navigate(["/"]);
      });
    
  }
  getmaxslots(){
    console.log("Hello world");
  }
}
