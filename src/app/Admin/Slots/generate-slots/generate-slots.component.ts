import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SlotsService } from '../../Admin-Services/slots.service';
@Component({
  selector: 'app-generate-slots',
  templateUrl: './generate-slots.component.html',
  styleUrls: ['./generate-slots.component.css']
})
export class GenerateSlotsComponent implements OnInit {
  form: any;
  slots=4;
  date:string;

  constructor(public slotservice:SlotsService) { }

  ngOnInit() {
    
  this.form=new FormGroup({
    date:new FormControl(null,{validators:[Validators.required]}),
  });
  }
  generateslots()
  {     
    var str=new Date(this.form.value.date);
    var date=str.toString();
    this.slotservice.generateslots(date.slice(4,15));
    

  }

}
