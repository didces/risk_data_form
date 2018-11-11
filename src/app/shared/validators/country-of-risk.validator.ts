import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class CountryOfRiskValidator {
  constructor() {}

  static countryOfRisk(group: FormGroup): FormValidationResult {
    return null;
  }
}
