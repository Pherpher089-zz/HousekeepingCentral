import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRatesComponent } from './hotel-rates.component';

describe('HotelRatesComponent', () => {
  let component: HotelRatesComponent;
  let fixture: ComponentFixture<HotelRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
