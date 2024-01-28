import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuCreateComponent } from './admin-menu-create.component';

describe('AdminMenuCreateComponent', () => {
  let component: AdminMenuCreateComponent;
  let fixture: ComponentFixture<AdminMenuCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMenuCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMenuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
