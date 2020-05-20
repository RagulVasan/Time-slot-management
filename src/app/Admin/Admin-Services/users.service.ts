import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LogisticsUsers } from '../Admin-models/logistics-users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient,private router:Router) { }


  savelogistics(logisticsId: string,logisticsName: string){
    console.log(logisticsId,logisticsName)
    const logisticsusers:
    LogisticsUsers={
      logisticsId:logisticsId,
      logisticsName:logisticsName,
    };
    this.http
    .post<{ message: string; post:LogisticsUsers }>("http://localhost:3000/logistics",logisticsusers)
    .subscribe(
      responseData => {
        console.log(responseData.message);
        this.router.navigate(["/"]);
      });

}
}
