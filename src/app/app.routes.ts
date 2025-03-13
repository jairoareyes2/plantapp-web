import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WateringCalendarComponent } from './watering-calendar/watering-calendar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'watering-calendar', component: WateringCalendarComponent }
];
