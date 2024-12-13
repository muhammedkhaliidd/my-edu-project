import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscribeComponent } from './subscribe.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SubscribeComponent', () => {
  let component: SubscribeComponent;
  let fixture: ComponentFixture<SubscribeComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    // Configure TestBed
    await TestBed.configureTestingModule({
      declarations: [SubscribeComponent],
      imports: [ReactiveFormsModule, FormsModule, IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeComponent);
    component = fixture.componentInstance;
    fb = TestBed.inject(FormBuilder);
    fixture.detectChanges(); // Trigger initial change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize subscribeFG form group', () => {
    expect(component.subscribeFG).toBeDefined();
    expect(component.subscribeFG.controls['info']).toBeDefined();
    expect(component.subscribeFG.get('info')?.get('name')).toBeDefined();
  });

  it('should have a valid subscribeFG form when filled correctly', () => {
    const form = component.subscribeFG;
    const infoGroup = form.get('info');

    infoGroup?.get('name')?.setValue('John Doe');
    infoGroup?.get('email')?.setValue('john.doe@example.com');
    infoGroup?.get('childName')?.setValue('Jane Doe');
    infoGroup?.get('childBirthDay')?.setValue(1);
    infoGroup?.get('childBirthMonth')?.setValue(1);
    infoGroup?.get('childBirthYear')?.setValue(2000);
    infoGroup?.get('childGrade')?.setValue('1');
    infoGroup?.get('childGender')?.setValue('boy');
    infoGroup?.get('topics')?.setValue(['english']);

    expect(form.valid).toBeTruthy();
  });

  it('should have an invalid form when email is invalid', () => {
    const form = component.subscribeFG;
    const infoGroup = form.get('info');

    infoGroup?.get('email')?.setValue('invalid-email');

    expect(form.invalid).toBeTruthy();
  });

  it('should change breadcrumb when clicked', () => {
    const breadcrumb = { title: 'Shipping', step: 2 };
    component.breadCrumbClicked(breadcrumb);
    expect(component.currentBreadCrumb).toEqual(breadcrumb);
  });

  it('should initialize breadCrumbs correctly', () => {
    expect(component.breadCrumbs.length).toBe(4);
    expect(component.breadCrumbs[0].title).toBe('Cart');
    expect(component.breadCrumbs[1].title).toBe('Information');
  });

  it('should call breadCrumbClicked on breadcrumb click', () => {
    const breadcrumb = { title: 'Shipping', step: 2 };
    spyOn(component, 'breadCrumbClicked');

    component.breadCrumbClicked(breadcrumb);

    expect(component.breadCrumbClicked).toHaveBeenCalledWith(breadcrumb);
  });
});
