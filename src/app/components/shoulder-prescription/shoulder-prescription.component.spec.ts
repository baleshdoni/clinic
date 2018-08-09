import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoulderPrescriptionComponent } from './shoulder-prescription.component';

describe('ShoulderPrescriptionComponent', () => {
  let component: ShoulderPrescriptionComponent;
  let fixture: ComponentFixture<ShoulderPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoulderPrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoulderPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
