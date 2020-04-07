import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarheaderComponent } from './components/navbarheader/navbarheader.component';
import {  EventEmitterService} from './services/event-emitter.service';
import { HomeComponent } from './components/home/home.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarheaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
