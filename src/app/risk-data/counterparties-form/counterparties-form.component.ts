import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CounterpartyIdRicosValidator } from 'src/app/shared/validators/counterparty-id-ricos.validator';
import { CounterpartyNameValidator } from 'src/app/shared/validators/counterparty-name.validator';
import { RatingMethodologyValidator } from 'src/app/shared/validators/rating-methodology.valdiator';
import { GroupIdRicosValidator } from 'src/app/shared/validators/group-id-ricos.validator';
import { RatingValidator } from 'src/app/shared/validators/rating.validator';
import { SectorValidator } from 'src/app/shared/validators/sector.validator';
import { CategoryValidator } from 'src/app/shared/validators/category.validator';
import { BaselPortoFolioValidator } from 'src/app/shared/validators/basel-portofolio.validator';
import { CountryOfRiskValidator } from 'src/app/shared/validators/country-of-risk.validator';
import { RevenuesAmountEurValidator } from 'src/app/shared/validators/revenues-amount-eur.validator';
import { UnpaidDebtsStartDateValidator } from 'src/app/shared/validators/unpaid-debts-startDate.Validator';
import { CountryOfResidenceValidator } from 'src/app/shared/validators/country-of-residence.validator';

@Component({
  selector: 'app-counterparties-form',
  templateUrl: './counterparties-form.component.html',
  styleUrls: ['./counterparties-form.component.css']
})
export class CounterpartiesFormComponent implements OnInit {
  counterpartiesForm: FormGroup;
  ratings: any = [
    { value: 'A++', viewValue: 'A++' },
    { value: 'A++', viewValue: 'A++' },
    { value: 'A+', viewValue: 'A+' },
    { value: 'B+', viewValue: 'B+' },
    { value: 'B', viewValue: 'B' },
    { value: 'C+', viewValue: 'C+' },
    { value: 'C-', viewValue: 'C-' }
  ];
  sectors: any = [
    { value: 'sectors-0', viewValue: 'Sectors-0' },
    { value: 'sectors-1', viewValue: 'Sectors-1' },
    { value: 'sectors-2', viewValue: 'Sectors-2' }
  ];
  categories: any = [
    { value: 'category-0', viewValue: 'Category-0' },
    { value: 'category-1', viewValue: 'Category-1' },
    { value: 'category-2', viewValue: 'Category-2' }
  ];
  baselPortofolios: any = [
    { value: 'baselPortofolio-0', viewValue: 'baselPortofolio-0' },
    { value: 'baselPortofolio-1', viewValue: 'baselPortofolio-1' },
    { value: 'baselPortofolio-2', viewValue: 'baselPortofolio-2' }
  ];

  countryOfResidences: any = [
    { value: 'countryOfResidence-0', viewValue: 'countryOfResidence-0' },
    { value: 'countryOfResidence-1', viewValue: 'countryOfResidence-1' },
    { value: 'countryOfResidence-2', viewValue: 'countryOfResidence-2' }
  ];

  countryOfRisks: any = [
    { value: 'countryOfRisk-0', viewValue: 'countryOfRisk-0' },
    { value: 'countryOfRisk-1', viewValue: 'countryOfRisk-1' },
    { value: 'countryOfRisk-2', viewValue: 'countryOfRisk-2' }
  ];

  roles: any = [
    { value: 'role-0', viewValue: 'role-0' },
    { value: 'role-1', viewValue: 'role-1' },
    { value: 'role-2', viewValue: 'role-2' }
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.counterpartiesForm = this._formBuilder.group({
      counterpartyIdRicos: [
        '',
        Validators.compose([
          Validators.required,
          CounterpartyIdRicosValidator.counterpartyIdRicos
        ])
      ],
      counterpartyName: ['', CounterpartyNameValidator.counterpartyName],
      ratingMethodology: ['', RatingMethodologyValidator.ratingMethodology],
      groupIdRicos: [
        '',
        Validators.compose([
          Validators.required,
          GroupIdRicosValidator.groupIdRicos
        ])
      ],
      rating: [
        '',
        Validators.compose([Validators.required, RatingValidator.rating])
      ],
      sector: [
        '',
        Validators.compose([Validators.required, SectorValidator.sector])
      ],
      category: [
        '',
        Validators.compose([Validators.required, CategoryValidator.category])
      ],
      baselPortofolio: [
        '',
        Validators.compose([
          Validators.required,
          BaselPortoFolioValidator.baselPortofolio
        ])
      ],
      countryOfResidence: [
        '',
        Validators.compose([
          Validators.required,
          CountryOfResidenceValidator.countryOfResidence
        ])
      ],
      countryOfRisk: [
        '',
        Validators.compose([
          Validators.required,
          CountryOfRiskValidator.countryOfRisk
        ])
      ],
      role: [],
      revenuesAmountEur: [
        '',
        Validators.compose([
          Validators.required,
          RevenuesAmountEurValidator.revenuesAmountEur
        ])
      ],
      unpaidDebtsStartDate: [
        '',
        Validators.compose([
          Validators.required,
          UnpaidDebtsStartDateValidator.unpaidDebtsStartDate
        ])
      ]
    });
  }

  validate() {
    console.log(this.counterpartiesForm.value);
  }
}
