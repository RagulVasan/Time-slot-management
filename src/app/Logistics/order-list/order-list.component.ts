import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Order } from '../Logistics-Model/order.model';
import { Subscription } from 'rxjs';
import { OrderService } from '../Logistics-Services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders:Order[]=[];
  ordersub:Subscription;
  source:Order[];
  dataSource:MatTableDataSource<any>;
  public columns = ['orderid'];
  constructor(public Service:OrderService) { }
  applyFilter(event: Event) {
    
    console.log(this.dataSource.data);
    console.log(this.dataSource.filteredData)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.Service.getorders();
    this.Service.getpostupdatelistener().subscribe((orders:Order[])=>{     
      this.orders=orders; 
      this.dataSource=new MatTableDataSource(this.orders);
      console.log(this.orders);
    });
  }
    
  onDelete(id:string,date:string,slot: string,timeslot:string,orderid:string){
    var timeslotdetails={
      "09:00":"nine",
  
      "10:00":"ten",
  
      "11:00":"eleven",
  
      "01:00":"one",
    
      "02:00":"two",
    
      "03:00":"three",
    
      "04:00":"four",
    
      "05:00":"five",
    };
    //console.log(id,date,orderid,slot,timeslot);
    this.Service.deleteorder(id,slot,timeslotdetails[timeslot],date,orderid);
  }

}
