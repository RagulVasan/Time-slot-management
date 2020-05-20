import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsHomeComponent } from './logistics-home.component';

describe('LogisticsHomeComponent', () => {
  let component: LogisticsHomeComponent;
  let fixture: ComponentFixture<LogisticsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
