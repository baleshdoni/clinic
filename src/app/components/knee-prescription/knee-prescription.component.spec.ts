import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KneePrescriptionComponent } from './knee-prescription.component';

describe('KneePrescriptionComponent', () => {
  let component: KneePrescriptionComponent;
  let fixture: ComponentFixture<KneePrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KneePrescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneePrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
