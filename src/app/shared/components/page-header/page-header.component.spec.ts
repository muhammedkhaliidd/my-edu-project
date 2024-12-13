import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageHeaderComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo image when `imgSrc` is provided', () => {
    const testImgSrc = 'https://example.com/logo.png';
    component.imgSrc = testImgSrc;
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeTruthy();
    expect(imgElement.nativeElement.getAttribute('src')).toBe(testImgSrc);
  });

  it('should not display the logo image when `imgSrc` is empty', () => {
    component.imgSrc = '';
    fixture.detectChanges();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeFalsy();
  });

  it('should render the ion-header and ion-toolbar elements', () => {
    const headerElement = fixture.debugElement.query(By.css('ion-header'));
    const toolbarElement = fixture.debugElement.query(By.css('ion-toolbar'));

    expect(headerElement).toBeTruthy();
    expect(toolbarElement).toBeTruthy();
  });
});
