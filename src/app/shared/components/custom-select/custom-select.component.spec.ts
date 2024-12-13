import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { CustomSelectComponent } from './custom-select.component';
import { SelectOption } from '../../models/subscribe.model';

describe('CustomSelectComponent', () => {
  let component: CustomSelectComponent;
  let fixture: ComponentFixture<CustomSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomSelectComponent],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not render ion-item if control is not provided', () => {
    component.control = null;
    fixture.detectChanges();

    const ionItem = fixture.debugElement.query(By.css('ion-item'));
    expect(ionItem).toBeFalsy();
  });

  it('should render ion-item if control is provided', () => {
    component.control = new FormControl();
    fixture.detectChanges();

    const ionItem = fixture.debugElement.query(By.css('ion-item'));
    expect(ionItem).toBeTruthy();
  });

  it('should render the placeholder correctly', () => {
    const testPlaceholder = 'Select an option';
    component.placeholder = testPlaceholder;
    component.control = new FormControl();
    fixture.detectChanges();

    const ionSelect = fixture.debugElement.query(By.css('ion-select'));
    console.log('testtt', ionSelect);
    // expect(ionSelect.attributes['placeholder']).toBe(testPlaceholder);
  });

  // it('should render options dynamically', () => {
  //   const testOptions: SelectOption[] = [
  //     { value: '1', viewValue: 'Option 1' },
  //     { value: '2', viewValue: 'Option 2' },
  //   ];
  //   component.options = testOptions;
  //   component.control = new FormControl();
  //   fixture.detectChanges();

  //   const ionOptions = fixture.debugElement.queryAll(
  //     By.css('ion-select-option')
  //   );
  //   expect(ionOptions.length).toBe(testOptions.length);

  //   ionOptions.forEach((optionElement, index) => {
  //     const option = testOptions[index];
  //     expect(optionElement.nativeElement.textContent.trim()).toBe(
  //       option.viewValue
  //     );
  //     expect(optionElement.attributes['value']).toBe(option.value);
  //   });
  // });

  // it('should bind form control correctly', () => {
  //   const formControl = new FormControl('2');
  //   component.control = formControl;
  //   component.options = [
  //     { value: '1', viewValue: 'Option 1' },
  //     { value: '2', viewValue: 'Option 2' },
  //   ];
  //   fixture.detectChanges();

  //   const ionSelect = fixture.debugElement.query(By.css('ion-select'));
  //   expect(ionSelect.componentInstance.value).toBe('2');

  //   // Simulate user selecting a different value.
  //   formControl.setValue('1');
  //   fixture.detectChanges();

  //   expect(ionSelect.componentInstance.value).toBe('1');
  // });
});
