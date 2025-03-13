import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WateringCalendarComponent } from './watering-calendar.component';

describe('WateringCalendarComponent', () => {
  let component: WateringCalendarComponent;
  let fixture: ComponentFixture<WateringCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WateringCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WateringCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
