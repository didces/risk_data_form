import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class RevenuesAmountEurValidator {
  constructor() {}

  static revenuesAmountEur(input: FormControl): FormValidationResult {
    if (input === undefined) {
      return null;
    }
    if (input.value < 0) {
      return { negativeValueError: true };
    }
    return null;
  }
}