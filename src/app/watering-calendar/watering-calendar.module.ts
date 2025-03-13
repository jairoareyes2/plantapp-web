import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WateringCalendarComponent } from './watering-calendar.component';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    WateringCalendarComponent,
    CalendarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    WateringCalendarComponent,
    CalendarComponent,
    SidebarComponent
  ],
})
export class WateringCalendarModule {}
