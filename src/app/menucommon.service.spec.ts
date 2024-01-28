import { TestBed } from '@angular/core/testing';

import { MenucommonService } from './menucommon.service';

describe('MenucommonService', () => {
  let service: MenucommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenucommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
