import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDetailComponent } from './signup-detail.component';

describe('SignupDetailComponent', () => {
  let component: SignupDetailComponent;
  let fixture: ComponentFixture<SignupDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupDetailComponent]
    });
    fixture = TestBed.createComponent(SignupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
