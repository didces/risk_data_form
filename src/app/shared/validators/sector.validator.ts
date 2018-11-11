import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class SectorValidator {
  constructor() {}

  static sector(group: FormGroup): FormValidationResult {
    return null;
  }
}
