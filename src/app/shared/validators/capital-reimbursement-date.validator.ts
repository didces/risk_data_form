import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class CapitalReimbursementDateValidator {
  constructor() {}

  static capitalReimbursementDate(group: FormGroup): FormValidationResult {
    return null;
  }
}
