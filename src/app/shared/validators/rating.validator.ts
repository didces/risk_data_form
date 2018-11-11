import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class RatingValidator {
  constructor() {}

  static rating(group: FormGroup): FormValidationResult {
    return null;
  }
}
