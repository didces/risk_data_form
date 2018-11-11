import { AsOfDateValidator } from './as-of-date.validator';
import { CapitalReimbursementAmountValidator } from './capital-reimbursement-amount.validator';
import { CapitalReimbursementDateValidator } from './capital-reimbursement-date.validator';
import { CcfValidator } from './ccf.validator';
import { CounterpartyIdRicosValidator } from './counterparty-id-ricos.validator';
import { GuarantorIdRicosValidator } from './guarantor-id-ricos.validator';
import { InterestRatePaymentFrequencyValidator } from './interest-rate-payment-frequency.validator';
import { InterestRatePeriodicityValidator } from './interest-rate-periodicity.validator';
import { LgdValidator } from './lgd.validator';
import { OnBalanceFlagValidator } from './on-balance-flag.validator';
import { ProductLineValidator } from './product-line.validator';
import { RiskTypeValidator } from './risk-type.validator';
import { SeniorityValidator } from './seniority.validator';
import { TransactionMaturityDateValidator } from './transaction-maturity-date.validator';
import { TransactionProductTypeValidator } from './transaction-product-type.validator';
import { TransactionReferenceValidator } from './transaction-reference.validator';
import { InterestRateValueValidator } from './interest-rate-value.validator';

export const VALIDATORS_DECLARATIONS: any[] = [
  AsOfDateValidator,
  CapitalReimbursementAmountValidator,
  CapitalReimbursementDateValidator,
  CcfValidator,
  CounterpartyIdRicosValidator,
  GuarantorIdRicosValidator,
  InterestRatePaymentFrequencyValidator,
  InterestRatePeriodicityValidator,
  InterestRateValueValidator,
  LgdValidator,
  OnBalanceFlagValidator,
  ProductLineValidator,
  RiskTypeValidator,
  SeniorityValidator,
  TransactionMaturityDateValidator,
  TransactionProductTypeValidator,
  TransactionReferenceValidator
];
