import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormValidationResult } from './form.validator';

@Injectable()
export class OnBalanceFlagValidator {
  constructor() {}

  static onBalanceFlag(group: FormGroup): FormValidationResult {
    return null;
  }
}
