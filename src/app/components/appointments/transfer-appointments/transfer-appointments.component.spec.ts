import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferAppointmentsComponent } from './transfer-appointments.component';

describe('TransferAppointmentsComponent', () => {
  let component: TransferAppointmentsComponent;
  let fixture: ComponentFixture<TransferAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferAppointmentsComponent]
    });
    fixture = TestBed.createComponent(TransferAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
