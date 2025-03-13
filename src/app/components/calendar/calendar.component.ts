import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: false,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarDays = [
    { date: 1, events: ['7:30AM', '9:00AM'] },
    { date: 2, events: [] },
    { date: 3, events: ['9:00AM'] },
    { date: 4, events: [] },
    { date: 5, events: ['7:30AM', '9:00AM'] },
    // Resto de los días del mes...
  ];
}
