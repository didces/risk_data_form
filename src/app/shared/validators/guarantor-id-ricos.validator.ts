import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class GuarantorIdRicosValidator {
  constructor() {}

  static guarantorIdRicos(group: FormGroup): FormValidationResult {
    return null;
  }
}
