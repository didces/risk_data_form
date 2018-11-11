import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RiskDataFormComponent } from './risk-data-form/risk-data-form.component';
import { TransactionsFormComponent } from './transactions-form/transactions-form.component';
import { CounterpartiesFormComponent } from './counterparties-form/counterparties-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [RiskDataFormComponent, TransactionsFormComponent, CounterpartiesFormComponent],
  exports: [RiskDataFormComponent]
})
export class RiskDataModule {}
