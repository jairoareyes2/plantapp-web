import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { TabsModule } from './tabs/tabs.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {InformeComponent} from './components/informe/informe.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        InformeComponent,
        LoginModule,
        TabsModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
