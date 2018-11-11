import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class CapitalReimbursementAmountValidator {
  constructor() {}

  static capitalReimbursementAmount(input: FormControl): FormValidationResult {
    if (input === undefined) {
      return null;
    }
    if (input.value < 0) {
      return { negativeValueError: true };
    }
    return null;
  }
}
