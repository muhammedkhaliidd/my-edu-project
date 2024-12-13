import { Component, EventEmitter, Output } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

interface Step {
  title1: string;
  title2: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-enroll-steps',
  templateUrl: './enroll-steps.component.html',
  styleUrls: ['./enroll-steps.component.scss'],
  standalone: true,
  imports: [IonButton],
})
export class EnrollStepsComponent {
  @Output() subscibeClicked: EventEmitter<void> = new EventEmitter<void>();
  steps: Step[] = [
    {
      icon: 'assets/images/step1.svg',
      title1: 'Step 1:',
      title2: 'Subscribe',
      description: `Select a subscription plan that suits your child's learning needs and preferences.`,
    },
    {
      icon: 'assets/images/step2.svg',
      title1: 'Step 2:',
      title2: 'Personalise Your Box',
      description: `Tell us about your child's age, interests, and learning goals, and we'll customize their surprise box accordingly.`,
    },
    {
      icon: 'assets/images/step3.svg',
      title1: 'Step 3:',
      title2: 'Receive Your Surprise Box',
      description: `Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials.`,
    },
  ];
  constructor() {}
}
