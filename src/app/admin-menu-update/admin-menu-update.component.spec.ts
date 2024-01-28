import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuUpdateComponent } from './admin-menu-update.component';

describe('AdminMenuUpdateComponent', () => {
  let component: AdminMenuUpdateComponent;
  let fixture: ComponentFixture<AdminMenuUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMenuUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMenuUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
