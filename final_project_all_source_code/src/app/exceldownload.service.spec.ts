import { TestBed } from '@angular/core/testing';

import { ExceldownloadService } from './exceldownload.service';

describe('ExceldownloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExceldownloadService = TestBed.get(ExceldownloadService);
    expect(service).toBeTruthy();
  });
});
