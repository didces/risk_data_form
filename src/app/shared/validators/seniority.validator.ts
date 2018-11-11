import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class SeniorityValidator {
  constructor() {}

  static seniority(group: FormGroup): FormValidationResult {
    return null;
  }
}
