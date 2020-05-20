import { Component, OnInit } from '@angular/core';
import { Appointment } from '../Admin-models/appointment.model';
import { MatTableDataSource } from '@angular/material';
import { AppointmentService } from '../Admin-Services/appointment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scheduling-list',
  templateUrl: './scheduling-list.component.html',
  styleUrls: ['./scheduling-list.component.css']
})
export class SchedulingListComponent implements OnInit {
  appointments:Appointment[]=[];
  appointmentsub:Subscription;
  source:Appointment[];
  dataSource:MatTableDataSource<any>;
  public columns = ['orderid'];
  constructor(public appointmentService:AppointmentService) { }
  applyFilter(event: Event) {
    
    console.log(this.dataSource.data);
    console.log(this.dataSource.filteredData)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.appointmentService.getappointments();
    this.appointmentService.getpostupdatelistener().subscribe((appointments:Appointment[])=>{     
      this.appointments=appointments; 
      this.dataSource=new MatTableDataSource(this.appointments);
    });
    

  }
    
  onDelete(id:string){

    this.appointmentService.deletepost(id).subscribe(()=>{
      this.appointmentService.getappointments();

    });
  }
  
}
