import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WateringCalendarComponent } from './watering-calendar.component';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    WateringCalendarComponent,
    CalendarComponent,
    SidebarComponent,
  ],
  imports: [CommonModule],
  exports: [WateringCalendarComponent, CalendarComponent, SidebarComponent],
})
export class WaterinCalendarModule {}
