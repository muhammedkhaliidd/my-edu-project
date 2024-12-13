import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Strict email validator that checks for the following:
// - Email is not empty
// - Email is in the format of `local-part@domain`
// - Local part can contain letters, digits, and special characters `._%+-`
// - Domain can contain letters, digits, and hyphens
export function strictEmailValidator(): ValidatorFn {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // Don't validate empty values
    }
    const isValid = emailRegex.test(control.value);
    return isValid ? null : { email: true };
  };
}
