import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class InterestRateValueValidator {
  constructor() {}

  static interestRateValue(group: FormGroup): FormValidationResult {
    return null;
  }
}
