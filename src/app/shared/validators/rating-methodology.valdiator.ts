import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class RatingMethodologyValidator {
  constructor() {}

  static ratingMethodology(group: FormGroup): FormValidationResult {
    return null;
  }
}
