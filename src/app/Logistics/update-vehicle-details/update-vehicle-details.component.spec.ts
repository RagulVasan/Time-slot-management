import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVehicleDetailsComponent } from './update-vehicle-details.component';

describe('UpdateVehicleDetailsComponent', () => {
  let component: UpdateVehicleDetailsComponent;
  let fixture: ComponentFixture<UpdateVehicleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVehicleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
