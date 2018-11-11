import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class RiskTypeValidator {
  constructor() {}

  static riskType(group: FormGroup): FormValidationResult {
    return null;
  }
}
