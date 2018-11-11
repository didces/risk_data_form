import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VALIDATORS_DECLARATIONS } from './validators/index';

@NgModule({
  imports: [CommonModule],
  declarations: [VALIDATORS_DECLARATIONS]
})
export class SharedModule {}
