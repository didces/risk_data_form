import { RiskDataModule } from './risk-data.module';

describe('RiskDataModule', () => {
  let riskDataModule: RiskDataModule;

  beforeEach(() => {
    riskDataModule = new RiskDataModule();
  });

  it('should create an instance', () => {
    expect(riskDataModule).toBeTruthy();
  });
});
