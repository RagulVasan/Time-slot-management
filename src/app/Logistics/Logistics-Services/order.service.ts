import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Order } from '../Logistics-Model/order.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
    slotdata:any;
    orderDetails:Order;
    private orders:Order[]=[];
    private orderupdated=new Subject<Order[]>();
  constructor(private http: HttpClient,private router:Router) { }
  getorderdetails(orderid:string){
     console.log(orderid);
     return this.http.get<{
       _id:string,
       orderId: string, 
       companyName: string, 
       date: string, 
       storename: string,
       landmark:string,
       location:string,
       bookingstatus:string}>
       ("http://localhost:3000/post/order/"+orderid);
  }

  getslotdetails(date:string){
    return this.http.get<{_id:string,date:string,one:any,two:any,three:any,four:any,five:any,nine:any,ten:any,eleven:any}>("http://localhost:3000/slots/"+date);
  }
  selectloadingslot(slotid:string,timeslot:string,time:string,loadingslot:string,vehicleNo:string,driverName:string,orderDetails:any){
    var id=orderDetails._id;
    this.slotdata={
      date:orderDetails.date,
      orderId:orderDetails.orderId,
      timeslot:timeslot,
      time:time,
      loadingslot:loadingslot,
      id:slotid
    };
    orderDetails["bookingstatus"]="booked";
    var fulldetails={
        orderId:orderDetails.orderId,
        date:orderDetails.date,
        landmark:orderDetails.landmark,
        location:orderDetails.location,
        storename:orderDetails.storename,
        companyName:orderDetails.companyName,
        vehicleNo:vehicleNo,
        driverName:driverName,
        time:time,
        slot:loadingslot

    };
    console.log(fulldetails);
    console.log(orderDetails);
    
    this.http.put("http://localhost:3000/slots/",this.slotdata).subscribe(responsedata=>{
      
      this.http.put("http://localhost:3000/post/"+id,orderDetails).subscribe(response => {
        this.router.navigate(["/"]);
      });
        this.http.post("http://localhost:3000/post/order/",fulldetails).subscribe(responsedata=>{
          console.log(responsedata);
        });
    });
  }
  getorders(){
    this.http.get<{ message: string; orders: any }>(
      "http://localhost:3000/orderlist"
    ).pipe(map((postdata)=>{
      return postdata.orders.map( post=>{
        return {
          id:post._id,
          orderId:post.orderId,
          date:post.date,
          companyName:post.companyName,
          timeslot:post.timeslot,
          loadingslot: post.slot,
          storename:post.storename,
          landmark:post.landmark,
          location:post.location,
          vehicleNo:post.vehicleNo,
          driverName:post.driverName
        };
      });
    }))
    .subscribe(postData => {
      console.log(postData)
      this.orders = postData;
      this.orderupdated.next([...this.orders]);
    } );
  }
  getorder(orderid:string){
    return this.http.get<{
      _id:string,
      orderId: string, 
      companyName: string, 
      date: string, 
      storename: string,
      landmark:string,
      location:string,
      timeslot:string,
      slot: string,
      vehicleNo:string,
      driverName:string}>
      ("http://localhost:3000/orderlist/"+orderid);
  }
  getpostupdatelistener(){

    return this.orderupdated.asObservable();
  }
  updateorder(id:string,oldtimeslot:string,oldslot:string,timeslot:string,time:string,loadingslot:string,orderDetails:any){
    var order={
      slotid:id,
      oldslot:oldslot,
      oldtimeslot:oldtimeslot,
      time:time,
      timeslot:timeslot,
      loadingslot:loadingslot,
      orderId:orderDetails.orderId,
    }
    var updatedorderdetails={
      orderId:orderDetails.orderId,
      date:orderDetails.date,
      companyName:orderDetails.companyName,
      landmark:orderDetails.landmark,
      location:orderDetails.location,
      timeslot:time,
      loadingslot:loadingslot,
      storename:orderDetails.storename,
      vehicleNo:orderDetails.vehicleNo,
      driverName:orderDetails.driverName
    }
    console.log(id,oldtimeslot,oldslot,timeslot,time,loadingslot,orderDetails);
    this.http.put("http://localhost:3000/reschedule/",order).subscribe(responsedata=>{
      this.http.put("http://localhost:3000/orderlist/"+orderDetails._id,updatedorderdetails).subscribe(responsedata=>{
        console.log(responsedata);
      });
        });
    /*this.http.put("http://localhost:3000/orderlist/"+id,this.orderDetails).subscribe(responsedata=>{
      console.log(responsedata);
    });*/ 
  }
  onupdateorder(id:string,order:any){
    console.log(id,order);
    this.http.put("http://localhost:3000/orderlist/"+id,order).subscribe(responsedata=>{
        console.log(responsedata);
      });
  }
  deleteorder(id:string,slot:string,timeslot:string,date:string,orderId:string){
    console.log(id,date,timeslot,slot,orderId);
    this.http.delete("http://localhost:3000/orderlist/"+id).subscribe(responsedata=>{
      this.slotdata={
        loadingslot:slot,
        timeslot:timeslot,
        date:date      
      }
        this.http.put("http://localhost:3000/reschedule/"+this.slotdata.loadingslot,this.slotdata).subscribe(responsedata=>{
          console.log(responsedata);
        });
        var orderdata={orderId:orderId};
      this.http.put("http://localhost:3000/post/",orderdata).subscribe(responsedata=>{
          console.log(responsedata);
      });
      this.getorders();
    });
    
  }
}
