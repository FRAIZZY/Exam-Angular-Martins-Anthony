import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComputerComponent } from './admin-computer.component';

describe('AdminComputerComponent', () => {
  let component: AdminComputerComponent;
  let fixture: ComponentFixture<AdminComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
