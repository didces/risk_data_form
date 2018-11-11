import { Component, OnInit } from '@angular/core';
import { AsOfDateValidator } from '../../shared/validators/as-of-date.validator';
import { CapitalReimbursementAmountValidator } from '../../shared/validators/capital-reimbursement-amount.validator';
import { CapitalReimbursementDateValidator } from '../../shared/validators/capital-reimbursement-date.validator';
import { CcfValidator } from '../../shared/validators/ccf.validator';
import { CounterpartyIdRicosValidator } from '../../shared/validators/counterparty-id-ricos.validator';
import { GuarantorIdRicosValidator } from '../../shared/validators/guarantor-id-ricos.validator';
import { InterestRatePaymentFrequencyValidator } from '../../shared/validators/interest-rate-payment-frequency.validator';
import { InterestRatePeriodicityValidator } from '../../shared/validators/interest-rate-periodicity.validator';
import { InterestRateValueValidator } from '../../shared/validators/interest-rate-value.validator';
import { LgdValidator } from '../../shared/validators/lgd.validator';
import { OnBalanceFlagValidator } from '../../shared/validators/on-balance-flag.validator';
import { ProductLineValidator } from '../../shared/validators/product-line.validator';
import { RiskTypeValidator } from '../../shared/validators/risk-type.validator';
import { SeniorityValidator } from '../../shared/validators/seniority.validator';
import { TransactionMaturityDateValidator } from '../../shared/validators/transaction-maturity-date.validator';
import { TransactionProductTypeValidator } from '../../shared/validators/transaction-product-type.validator';
import { TransactionReferenceValidator } from '../../shared/validators/transaction-reference.validator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html',
  styleUrls: ['./transactions-form.component.css']
})
export class TransactionsFormComponent implements OnInit {
  riskDataForm: FormGroup;
  riskTypes: any = [
    { value: 'risk-0', viewValue: 'Risk-0' },
    { value: 'risk-1', viewValue: 'Risk-1' },
    { value: 'risk-2', viewValue: 'Risk-2' }
  ];
  productLines: any = [
    { value: 'productLine-0', viewValue: 'ProductLine-0' },
    { value: 'productLine-1', viewValue: 'ProductLine-1' },
    { value: 'productLine-2', viewValue: 'ProductLine-2' }
  ];
  interestRatePeriodicities: any = [
    {
      value: 'interestRatePeriodicity-0',
      viewValue: 'InterestRatePeriodicity-0'
    },
    {
      value: 'interestRatePeriodicity-1',
      viewValue: 'InterestRatePeriodicity-1'
    },
    {
      value: 'interestRatePeriodicity-2',
      viewValue: 'InterestRatePeriodicity-2'
    }
  ];
  transactionProductTypes: any = [
    {
      value: 'transactionProductType-0',
      viewValue: 'transactionProductType-0'
    },
    {
      value: 'transactionProductType-1',
      viewValue: 'transactionProductType-1'
    },
    {
      value: 'transactionProductType-2',
      viewValue: 'transactionProductType-2'
    }
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.riskDataForm = this._formBuilder.group({
      asOfDate: [
        '',
        Validators.compose([Validators.required, AsOfDateValidator.AsOfDate])
      ],
      transactionReference: [
        '',
        Validators.compose([
          Validators.required,
          TransactionReferenceValidator.transactionReference
        ])
      ],
      counterpartyIdRicos: [
        '',
        Validators.compose([
          Validators.required,
          CounterpartyIdRicosValidator.counterpartyIdRicos
        ])
      ],
      seniority: [
        '',
        Validators.compose([Validators.required, SeniorityValidator.seniority])
      ],
      capitalReimbursementAmount: [
        '',
        Validators.compose([
          Validators.required,
          CapitalReimbursementAmountValidator.capitalReimbursementAmount
        ])
      ],
      capitalReimbursementDate: [
        '',
        Validators.compose([
          Validators.required,
          CapitalReimbursementDateValidator.capitalReimbursementDate
        ])
      ],
      onBalanceFlag: [
        '',
        Validators.compose([
          Validators.required,
          OnBalanceFlagValidator.onBalanceFlag
        ])
      ],
      guarantorIdRicos: [
        '',
        Validators.compose([
          Validators.required,
          GuarantorIdRicosValidator.guarantorIdRicos
        ])
      ],
      interestRatePaymentFrequency: [
        '',
        Validators.compose([
          Validators.required,
          InterestRatePaymentFrequencyValidator.interestRatePaymentFrequency
        ])
      ],
      interestRatePeriodicity: [
        '',
        Validators.compose([
          Validators.required,
          InterestRatePeriodicityValidator.interestRatePeriodicity
        ])
      ],
      interestRateValue: [
        '',
        Validators.compose([
          Validators.required,
          InterestRateValueValidator.interestRateValue
        ])
      ],
      transactionMaturityDate: [
        '',
        Validators.compose([
          Validators.required,
          TransactionMaturityDateValidator.transactionMaturityDate
        ])
      ],
      ccf: ['', Validators.compose([Validators.required, CcfValidator.ccf])],
      lgd: ['', Validators.compose([Validators.required, LgdValidator.lgd])],
      productLine: [
        '',
        Validators.compose([
          Validators.required,
          ProductLineValidator.productLine
        ])
      ],
      riskType: [
        '',
        Validators.compose([Validators.required, RiskTypeValidator.riskType])
      ],
      transactionProductType: [
        '',
        Validators.compose([
          Validators.required,
          TransactionProductTypeValidator.transactionProductType
        ])
      ]
    });
  }

  validate() {
    console.log(this.riskDataForm.value);
  }
}
