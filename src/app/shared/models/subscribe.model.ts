import { FormControl, FormGroup } from '@angular/forms';

export type Gender = 'boy' | 'girl';
export type Grade =
  | 'k'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

export type Topic = 'arabic' | 'islamic' | 'english' | 'history' | 'sports';

export interface SelectOption {
  value: any;
  viewValue: any;
}

export interface SubscribeFG {
  info: FormGroup<SubscribeInfoFG>;
}

export interface SubscribeInfoFG {
  name: FormControl<string>;
  email: FormControl<string>;
  childName: FormControl<string>;
  childBirthYear: FormControl<number | null>;
  childBirthMonth: FormControl<number | null>;
  childBirthDay: FormControl<number | null>;
  childGrade: FormControl<Grade | null>;
  childGender: FormControl<Gender | null>;
  topics: FormControl<Topic[]>;
}

export const BIRTH_MONTHS = Array.from({ length: 12 }, (_, i) => i + 1); // Months from 1 to 12
export const BIRTH_YEARS = Array.from(
  { length: 2023 - 1960 + 1 },
  (_, i) => 1960 + i
); // Years from 1960 to 2023

export const GRADE_OPTIONS: SelectOption[] = [
  { value: 'k', viewValue: 'Kindergarten' },
  { value: '1', viewValue: '1st Grade' },
  { value: '2', viewValue: '2nd Grade' },
  { value: '3', viewValue: '3rd Grade' },
  { value: '4', viewValue: '4th Grade' },
  { value: '5', viewValue: '5th Grade' },
  { value: '6', viewValue: '6th Grade' },
  { value: '7', viewValue: '7th Grade' },
  { value: '8', viewValue: '8th Grade' },
  { value: '9', viewValue: '9th Grade' },
  { value: '10', viewValue: '10th Grade' },
  { value: '11', viewValue: '11th Grade' },
  { value: '12', viewValue: '12th Grade' },
];
