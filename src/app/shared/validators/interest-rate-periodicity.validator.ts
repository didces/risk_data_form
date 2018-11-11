import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class InterestRatePeriodicityValidator {
  constructor() {}

  static interestRatePeriodicity(group: FormGroup): FormValidationResult {
    return null;
  }
}
