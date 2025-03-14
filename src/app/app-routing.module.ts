import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './tabs/tabs.component';
import { CalendarComponent } from './components/calendar/calendar.component'; // Importa CalendarComponent
import { SpotsComponent } from './components/spots/spots.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: TabsComponent,
    children: [
      {
        path: '',
        redirectTo: 'calendario',
        pathMatch: 'full'
      },
      {
        path: 'calendario',
        component: CalendarComponent
      },
      {
        path: 'espacios',
        component: SpotsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
