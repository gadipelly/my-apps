import { TestBed } from '@angular/core/testing';

import { FilpkartPageService } from './filpkart-page.service';

describe('FilpkartPageService', () => {
  let service: FilpkartPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilpkartPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
