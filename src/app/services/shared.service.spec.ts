import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDaysInMonth', () => {
    it('should return 31 days for a month with 31 days', () => {
      const daysInMonth = service.getDaysInMonth(1, 2024); // January (31 days)
      expect(daysInMonth).toBe(31);
    });

    it('should return 28 days for February in a non-leap year', () => {
      const daysInMonth = service.getDaysInMonth(2, 2023); // February in a non-leap year
      expect(daysInMonth).toBe(28);
    });

    it('should return 29 days for February in a leap year', () => {
      const daysInMonth = service.getDaysInMonth(2, 2024); // February in a leap year
      expect(daysInMonth).toBe(29);
    });

    it('should return 30 days for a month with 30 days', () => {
      const daysInMonth = service.getDaysInMonth(4, 2024); // April (30 days)
      expect(daysInMonth).toBe(30);
    });

    it('should return 31 by default if month or year is not provided', () => {
      const daysInMonth = service.getDaysInMonth(); // No parameters
      expect(daysInMonth).toBe(31); // Default return value
    });
  });

  describe('transformArrToSelectOptions', () => {
    it('should transform an array of numbers to select options format', () => {
      const inputArr = [1, 2, 3];
      const expectedOutput = [
        { value: 1, viewValue: 1 },
        { value: 2, viewValue: 2 },
        { value: 3, viewValue: 3 },
      ];

      const result = service.transformArrToSelectOptions(inputArr);
      expect(result).toEqual(expectedOutput);
    });

    it('should transform an array of strings to select options format', () => {
      const inputArr = ['one', 'two', 'three'];
      const expectedOutput = [
        { value: 'one', viewValue: 'one' },
        { value: 'two', viewValue: 'two' },
        { value: 'three', viewValue: 'three' },
      ];

      const result = service.transformArrToSelectOptions(inputArr);
      expect(result).toEqual(expectedOutput);
    });

    it('should return an empty array when an empty array is passed', () => {
      const inputArr: (string | number)[] = [];
      const result = service.transformArrToSelectOptions(inputArr);
      expect(result).toEqual([]);
    });
  });
});
