import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSlotMaintanenceComponent } from './update-slot-maintanence.component';

describe('UpdateSlotMaintanenceComponent', () => {
  let component: UpdateSlotMaintanenceComponent;
  let fixture: ComponentFixture<UpdateSlotMaintanenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSlotMaintanenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSlotMaintanenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
