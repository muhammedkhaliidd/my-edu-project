import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscribeSummaryComponent } from './subscribe-summary.component';
import { CommonModule } from '@angular/common'; // For structural directives like ngIf

describe('SubscribeSummaryComponent', () => {
  let component: SubscribeSummaryComponent;
  let fixture: ComponentFixture<SubscribeSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribeSummaryComponent, CommonModule], // Import the standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
