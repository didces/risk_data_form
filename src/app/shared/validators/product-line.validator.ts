import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class ProductLineValidator {
  constructor() {}

  static productLine(group: FormGroup): FormValidationResult {
    return null;
  }
}
