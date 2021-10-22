import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeepingCentralComponent } from './housekeeping-central.component';

describe('HousekeepingCentralComponent', () => {
  let component: HousekeepingCentralComponent;
  let fixture: ComponentFixture<HousekeepingCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HousekeepingCentralComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeepingCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
