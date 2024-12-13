import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscribeInfoFormComponent } from './subscribe-info-form.component';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SharedService } from 'src/app/services/shared.service';

describe('SubscribeInfoFormComponent', () => {
  let component: SubscribeInfoFormComponent;
  let fixture: ComponentFixture<SubscribeInfoFormComponent>;
  let sharedService: SharedService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SubscribeInfoFormComponent,
        IonicModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
      ],
      providers: [
        {
          provide: SharedService,
          useValue: {
            transformArrToSelectOptions: (arr: any[]) =>
              arr.map((item) => ({ label: item, value: item })),
            getDaysInMonth: jasmine.createSpy().and.returnValue(30), // mock the method for days in month
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeInfoFormComponent);
    component = fixture.componentInstance;
    sharedService = TestBed.inject(SharedService);

    // Set up the form
    component.subscribeInfoFG = new FormGroup<any>({
      name: new FormControl<string>(''),
      email: new FormControl(''),
      childName: new FormControl(''),
      childBirthYear: new FormControl('2024'),
      childBirthMonth: new FormControl('2'),
      childBirthDay: new FormControl('15'),
      childGrade: new FormControl('2'),
      childGender: new FormControl('boy'),
      topics: new FormControl(['arabic']),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update available days when month or year is changed', () => {
    // Initially available days should be set to 30 based on the mock
    expect(component.availableDays.length).toBe(30);

    // Simulate changing the month and year
    component.getControl('childBirthMonth')?.setValue('1'); // February (mocked)
    component.getControl('childBirthYear')?.setValue('2023'); // Update year
    fixture.detectChanges();

    // Check if available days are updated
    expect(component.availableDays.length).toBe(30); // Still mocked to return 30 days
    expect(sharedService.getDaysInMonth).toHaveBeenCalled();
  });

  it('should toggle topic selection', () => {
    const topic = 'english';

    // Initial topics should contain 'arabic'
    expect(component.getControl('topics')?.value).toEqual(['arabic']);

    // Toggle the 'english' topic
    component.toggleTopic(topic);
    expect(component.getControl('topics')?.value).toEqual([
      'arabic',
      'english',
    ]);

    // Toggle 'english' topic again to remove it
    component.toggleTopic(topic);
    expect(component.getControl('topics')?.value).toEqual(['arabic']);
  });

  it('should disable topic chip if more than 3 topics are selected', () => {
    const topic = 'history';
    component.getControl('topics')?.setValue(['arabic', 'islamic', 'english']);
    fixture.detectChanges();

    // Try to select 'history' topic when 3 topics are already selected
    const chip = fixture.nativeElement.querySelectorAll('ion-chip')[3]; // 'history' chip
    expect(chip.disabled).toBeTrue();
  });
});
