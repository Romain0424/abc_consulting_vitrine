import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortailAdminComponent } from './portail-admin.component';

describe('PortailAdminComponent', () => {
  let component: PortailAdminComponent;
  let fixture: ComponentFixture<PortailAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortailAdminComponent]
    });
    fixture = TestBed.createComponent(PortailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
