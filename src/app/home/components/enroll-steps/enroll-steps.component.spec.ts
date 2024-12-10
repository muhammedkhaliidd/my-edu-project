import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EnrollStepsComponent } from './enroll-steps.component';

describe('EnrollStepsComponent', () => {
  let component: EnrollStepsComponent;
  let fixture: ComponentFixture<EnrollStepsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EnrollStepsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
