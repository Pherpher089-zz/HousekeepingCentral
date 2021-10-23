import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousekeepingAnimnationComponent } from './housekeeping-animnation.component';

describe('HousekeepingAnimnationComponent', () => {
  let component: HousekeepingAnimnationComponent;
  let fixture: ComponentFixture<HousekeepingAnimnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousekeepingAnimnationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousekeepingAnimnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
