import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { WateringCalendarComponent } from './watering-calendar/watering-calendar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        LoginModule,
        WateringCalendarComponent,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
