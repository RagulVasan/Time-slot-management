import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../Admin-Services/users.service';

@Component({
  selector: 'app-add-logistics',
  templateUrl: './add-logistics.component.html',
  styleUrls: ['./add-logistics.component.css']
})
export class AddLogisticsComponent implements OnInit {
  form:FormGroup;
  constructor(public usersService:UsersService) { }

  ngOnInit() {

    this.form=new FormGroup({
      logisticsId:new FormControl(null,{validators:[Validators.required,Validators.minLength(4)]}),
      logisticsName: new FormControl(null,{validators:[Validators.required,Validators.minLength(4)]}),
    });
  }
  savedetails(){
    this.usersService.savelogistics(this.form.value.logisticsId,this.form.value.logisticsName);
  }

}
