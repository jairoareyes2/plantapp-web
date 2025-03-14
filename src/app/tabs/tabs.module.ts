import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SpotsComponent } from '../components/spots/spots.component';
import { CreateSpotComponent } from '../components/create-spot/create-spot.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TabsComponent, 
    CalendarComponent, 
    SidebarComponent, 
    SpotsComponent,
    CreateSpotComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [TabsComponent, CalendarComponent, SidebarComponent],
})
export class TabsModule {}
