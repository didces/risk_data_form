import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class RoleValidator {
  constructor() {}

  static role(group: FormGroup): FormValidationResult {
    return null;
  }
}
