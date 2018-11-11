import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class AsOfDateValidator {
  constructor() {}

  static AsOfDate(group: FormGroup): FormValidationResult {
    return null;
  }
}
