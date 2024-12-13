import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubscribeInfoFormComponent } from './subscribe-info-form.component';

describe('SubscribeInfoFormComponent', () => {
  let component: SubscribeInfoFormComponent;
  let fixture: ComponentFixture<SubscribeInfoFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SubscribeInfoFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
