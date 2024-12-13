import { Injectable } from '@angular/core';
import { SelectOption } from '../shared/models/subscribe.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  getDaysInMonth(month?: number, year?: number): number {
    if (!month || !year) {
      return 31;
    }
    return new Date(year, month, 0).getDate(); // Days in the given month and year
  }

  transformArrToSelectOptions(arr: (number | string)[]): SelectOption[] {
    return arr.map((item) => ({ value: item, viewValue: item }));
  }
}
