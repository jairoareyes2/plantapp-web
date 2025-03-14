import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { addMonths, subMonths, isSameDay } from 'date-fns';

@Component({
  selector: 'app-calendar',
  standalone: false,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  constructor() {
    this.generateEvents();
  }

  private generateEvents(): void {
    this.events = [
      ...this.generateEventsForMonth(2025, 1), // Febrero (mes 1 porque en JavaScript los meses van de 0 a 11)
      ...this.generateEventsForMonth(2025, 2), // Marzo
      ...this.generateEventsForMonth(2025, 3), // Abril
    ];
  }

  private generateEventsForMonth(year: number, month: number): CalendarEvent[] {
    const events: CalendarEvent[] = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total de días en el mes

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();

      if (dayOfWeek === 1 || dayOfWeek === 5) {
        // Lunes o Viernes
        events.push(
          { start: new Date(year, month, day, 7, 30), title: '7:30 AM' },
          { start: new Date(year, month, day, 9, 0), title: '9:00 AM' }
        );
      } else if (dayOfWeek === 3) {
        // Miércoles
        events.push({
          start: new Date(year, month, day, 9, 0),
          title: '9:00 AM',
        });
      }
    }

    return events;
  }

  previousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth(): void {
    this.viewDate = addMonths(this.viewDate, 1);
  }

  eventTitle(date: Date): string[] {
    console.log(`testing date: ${date}`);
    return this.events
      .filter((event) => isSameDay(event.start, date))
      .map((event) => event.title);
  }
}
