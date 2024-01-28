import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDishCreateComponent } from './admin-dish-create.component';

describe('AdminDishCreateComponent', () => {
  let component: AdminDishCreateComponent;
  let fixture: ComponentFixture<AdminDishCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDishCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDishCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
