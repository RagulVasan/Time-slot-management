import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSlotsComponent } from './generate-slots.component';

describe('GenerateSlotsComponent', () => {
  let component: GenerateSlotsComponent;
  let fixture: ComponentFixture<GenerateSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
