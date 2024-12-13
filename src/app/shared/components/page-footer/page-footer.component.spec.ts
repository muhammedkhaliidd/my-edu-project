import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageFooterComponent } from './page-footer.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('PageFooterComponent', () => {
  let component: PageFooterComponent;
  let fixture: ComponentFixture<PageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageFooterComponent],
      imports: [IonicModule.forRoot(), FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the subscribe section if `showSubscribe` is true', () => {
    component.showSubscribe = true;
    fixture.detectChanges();

    const subscribeSection = fixture.debugElement.query(
      By.css('.subscribe-section')
    );
    expect(subscribeSection).toBeTruthy();
  });

  it('should hide the subscribe section if `showSubscribe` is false', () => {
    component.showSubscribe = false;
    fixture.detectChanges();

    const subscribeSection = fixture.debugElement.query(
      By.css('.subscribe-section')
    );
    expect(subscribeSection).toBeFalsy();
  });

  it('should update email property when typing in the input field', () => {
    component.showSubscribe = true; // Ensure the input field is visible.
    fixture.detectChanges();

    const emailInput = fixture.debugElement.query(
      By.css('input[type="email"]')
    );
    const testEmail = 'test@example.com';

    emailInput.nativeElement.value = testEmail;
    emailInput.nativeElement.dispatchEvent(new Event('input')); // Trigger input event.
    fixture.detectChanges();

    expect(component.email).toBe(testEmail);
  });
});
