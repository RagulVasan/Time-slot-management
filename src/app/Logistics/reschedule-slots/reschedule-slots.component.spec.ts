import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleSlotsComponent } from './reschedule-slots.component';

describe('RescheduleSlotsComponent', () => {
  let component: RescheduleSlotsComponent;
  let fixture: ComponentFixture<RescheduleSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescheduleSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescheduleSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
