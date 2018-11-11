import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class UnpaidDebtsStartDateValidator {
  constructor() {}

  static unpaidDebtsStartDate(group: FormGroup): FormValidationResult {
    return null;
  }
}
