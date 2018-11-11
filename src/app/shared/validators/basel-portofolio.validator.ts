import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class BaselPortoFolioValidator {
  constructor() {}

  static baselPortofolio(group: FormGroup): FormValidationResult {
    return null;
  }
}
