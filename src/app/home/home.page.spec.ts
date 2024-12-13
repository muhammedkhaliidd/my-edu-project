import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { NavController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // If you need to mock child components

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let navCtrl: jasmine.SpyObj<NavController>;

  beforeEach(async () => {
    // Create a spy object for NavController
    navCtrl = jasmine.createSpyObj('NavController', ['navigateForward']);

    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [], // Import necessary modules if needed
      providers: [
        { provide: NavController, useValue: navCtrl }, // Provide the spy object for NavController
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Optional, if you are using custom components like app-page-header
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial change detection
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to subscribe page when subscribeClicked is emitted', () => {
    // Call the method directly (this simulates the event being triggered)
    component.onSubscibeClicked();

    // Verify that the navigateForward method was called with the correct argument
    expect(navCtrl.navigateForward).toHaveBeenCalledWith('/subscribe');
  });

  it('should call onSubscibeClicked when subscribeClicked is emitted from child components', () => {
    spyOn(component, 'onSubscibeClicked'); // Spy on the method

    // Trigger the event manually (this simulates the child component emitting the event)
    const boardingElement =
      fixture.debugElement.nativeElement.querySelector('app-boarding');
    const enrollStepsElement =
      fixture.debugElement.nativeElement.querySelector('app-enroll-steps');

    // Simulate the event emission (using custom event name from template)
    boardingElement.dispatchEvent(new CustomEvent('subscibeClicked'));
    enrollStepsElement.dispatchEvent(new CustomEvent('subscibeClicked'));

    // Check that the method was called
    expect(component.onSubscibeClicked).toHaveBeenCalledTimes(2);
  });
});
