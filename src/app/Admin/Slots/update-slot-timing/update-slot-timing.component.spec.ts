import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSlotTimingComponent } from './update-slot-timing.component';

describe('UpdateSlotTimingComponent', () => {
  let component: UpdateSlotTimingComponent;
  let fixture: ComponentFixture<UpdateSlotTimingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSlotTimingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSlotTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
