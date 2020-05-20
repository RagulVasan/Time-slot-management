import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Appointment} from '../Admin-models/appointment.model';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments:Appointment[]=[];
  private postupdated=new Subject<Appointment[]>(); 
  constructor(private http: HttpClient,private router:Router) { }
  deletepost(postid:string){
    return this.http.delete("http://localhost:3000/post/"+postid);
  }
  
  saveappointment(orderid:string,companyname:string,date:string,storename:string,landmark: string,location:string,bookingstatus:string){      
      const appointment:
      Appointment={
        id:null,
        orderId:orderid,
        companyName:companyname,
        storename:storename,
        date:date,
        landmark:landmark,
        location:location,
        bookingstatus:bookingstatus
      };
      
      this.http
        .post<{ message: string; post:Appointment }>("http://localhost:3000/post",appointment)
        .subscribe(
          responseData => {
            console.log(responseData.message);
            console.log(responseData.post);
            this.router.navigate(["/"]);
          });
  }

  getappointment(appointmentid:string){
    return this.http.get<{_id:string,orderId: string, companyName: string, date: string, storename: string,landmark:string,location:string,bookingstatus:string}>("http://localhost:3000/post/"+appointmentid);
  }
  getpostupdatelistener(){

    return this.postupdated.asObservable();
  }
  updateappointment(id:string,orderid:string,companyname:string,date:string,storename:string,landmark: string,location:string,bookingstatus:string){
    const appointment:
      Appointment={
        id:null,
        orderId:orderid,
        companyName:companyname,
        storename:storename,
        date:date,
        landmark:landmark,
        location:location,
        bookingstatus:bookingstatus
      };
      this.http.put("http://localhost:3000/post/"+id,appointment).subscribe(response => {
      this.router.navigate(["/"]);
    });
  }
  getappointments(){
    this.http
    .get<{ message: string; posts: any }>(
      "http://localhost:3000/post"
    ).pipe(map((postdata)=>{
      return postdata.posts.map( post=>{
        return {
            orderId:post.orderId,
            date:post.date,
            companyName:post.companyName,
            id:post._id,
            storename:post.storename,
            landmark:post.landmark,
            location:post.location,
            bookingstatus:post.bookingstatus,
        };
      });
    }))
    .subscribe(postData => {
      console.log(postData)
      this.appointments = postData;
      this.postupdated.next([...this.appointments]);
    } );    
  }
}
