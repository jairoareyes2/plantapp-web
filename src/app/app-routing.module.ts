import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TabsComponent } from './tabs/tabs.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SpotsComponent } from './components/spots/spots.component';
import {PerfilComponent} from './components/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
      },
      {
        path: 'perfil',
        component: PerfilComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
