import { TestBed } from '@angular/core/testing';

import { AdminDishService } from './admin-dish.service';

describe('AdminDishService', () => {
  let service: AdminDishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
