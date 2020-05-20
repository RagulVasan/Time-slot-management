import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-slot-timing',
  templateUrl: './update-slot-timing.component.html',
  styleUrls: ['./update-slot-timing.component.css']
})
export class UpdateSlotTimingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var filter = {checkfield:"id"};
    console.log(filter);
    
  }

}
