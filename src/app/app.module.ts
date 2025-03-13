import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        LoginModule,
        TabsModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
