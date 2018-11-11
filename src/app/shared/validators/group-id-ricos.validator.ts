import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class GroupIdRicosValidator {
  constructor() {}

  static groupIdRicos(group: FormGroup): FormValidationResult {
    return null;
  }
}
