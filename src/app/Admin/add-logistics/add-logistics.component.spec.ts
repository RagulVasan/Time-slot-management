import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogisticsComponent } from './add-logistics.component';

describe('AddLogisticsComponent', () => {
  let component: AddLogisticsComponent;
  let fixture: ComponentFixture<AddLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
