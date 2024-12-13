import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  BIRTH_MONTHS,
  BIRTH_YEARS,
  GRADE_OPTIONS,
  SelectOption,
  SubscribeInfoFG,
  Topic,
} from 'src/app/shared/models/subscribe.model';
import { SharedModule } from '../../../shared/shared.module';
import { SharedService } from 'src/app/services/shared.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-subscribe-info-form',
  templateUrl: './subscribe-info-form.component.html',
  styleUrls: ['./subscribe-info-form.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, SharedModule],
})
export class SubscribeInfoFormComponent implements OnInit {
  @Input({ required: true }) subscribeInfoFG!: FormGroup<SubscribeInfoFG>;
  private _destroyRef = inject(DestroyRef);

  availableDays: SelectOption[] = [];
  years = this.sharedService.transformArrToSelectOptions(BIRTH_YEARS);
  months = this.sharedService.transformArrToSelectOptions(BIRTH_MONTHS);
  grades = GRADE_OPTIONS;
  topics: Topic[] = ['arabic', 'islamic', 'english', 'history', 'sports'];
  constructor(private readonly sharedService: SharedService) {}

  ngOnInit(): void {
    this.updateDays();
    this.getControl('childBirthMonth')
      ?.valueChanges?.pipe(takeUntilDestroyed(this._destroyRef))
      ?.subscribe(() => {
        this.updateDays();
      });
    this.getControl('childBirthYear')
      ?.valueChanges?.pipe(takeUntilDestroyed(this._destroyRef))
      ?.subscribe(() => {
        this.updateDays();
      });
  }

  getControl(name: keyof SubscribeInfoFG): FormControl<any> | null {
    return (this.subscribeInfoFG?.get(name) as FormControl<any>) || null;
  }

  // This method is used to update the days in the child's birth month
  updateDays(): void {
    const month = this.getControl('childBirthMonth')?.value;
    const year = this.getControl('childBirthYear')?.value;

    const daysInMonth = this.sharedService.getDaysInMonth(month, year);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    this.availableDays = this.sharedService.transformArrToSelectOptions(days);
    console.log('updateDays', month, year, this.availableDays);

    const selectedDay = this.getControl('childBirthDay')?.value;
    if (selectedDay && selectedDay > daysInMonth) {
      const dayControl = this.getControl('childBirthDay');
      dayControl?.reset(null);
    }
  }

  // This method is used to check if a topic is selected
  isTopicSelected(topic: Topic): boolean {
    return this.getControl('topics')?.value?.includes(topic);
  }

  // This method is used to toggle a topic and add or remove it from the selected topics
  toggleTopic(topic: Topic): void {
    const topicsControl = this.getControl('topics');
    const topics = topicsControl?.value as Topic[];
    if (this.isTopicSelected(topic)) {
      const index = topics.indexOf(topic);
      topics.splice(index, 1);
    } else {
      topics.push(topic);
    }
    topicsControl?.patchValue(topics);
  }
}
