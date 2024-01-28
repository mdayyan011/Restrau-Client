import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucommonComponent } from './menucommon.component';

describe('MenucommonComponent', () => {
  let component: MenucommonComponent;
  let fixture: ComponentFixture<MenucommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenucommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenucommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
