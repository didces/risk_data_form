import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class CounterpartyIdRicosValidator {
  constructor() {}

  static counterpartyIdRicos(group: FormGroup): FormValidationResult {
    return null;
  }
}
