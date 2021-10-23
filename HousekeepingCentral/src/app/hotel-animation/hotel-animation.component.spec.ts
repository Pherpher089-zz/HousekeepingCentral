import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAnimationComponent } from './hotel-animation.component';

describe('HotelAnimationComponent', () => {
  let component: HotelAnimationComponent;
  let fixture: ComponentFixture<HotelAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
