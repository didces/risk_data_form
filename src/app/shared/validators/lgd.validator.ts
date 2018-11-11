import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class LgdValidator {
  constructor() {}

  static lgd(group: FormGroup): FormValidationResult {
    return null;
  }
}
