import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class CounterpartyNameValidator {
  constructor() {}

  static counterpartyName(group: FormGroup): FormValidationResult {
    return null;
  }
}
