import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class CcfValidator {
  constructor() {}

  static ccf(group: FormGroup): FormValidationResult {
    return null;
  }
}
