import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubscribeSummaryComponent } from './subscribe-summary.component';

describe('SubscribeSummaryComponent', () => {
  let component: SubscribeSummaryComponent;
  let fixture: ComponentFixture<SubscribeSummaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SubscribeSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
