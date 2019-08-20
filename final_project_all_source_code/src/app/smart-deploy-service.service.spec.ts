import { TestBed } from '@angular/core/testing';

import { SmartDeployServiceService } from './smart-deploy-service.service';

describe('SmartDeployServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartDeployServiceService = TestBed.get(SmartDeployServiceService);
    expect(service).toBeTruthy();
  });
});
