import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LoginComponent } from './components/login/login.component';
import { PrayerComponent } from './components/prayer/prayer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { LogoutComponent } from './components/logout/logout.component';

import { PrayerService } from './services/prayer.service';
import { LocationsService } from './services/locations.service';
import { TestimoniesService } from './services/testimonies.service';

import {HttpClientModule} from '@angular/common/http';
import { GetRequestComponent } from './components/prayer/fetchPrayer/fetch.component';
import { FetchTestimoniesComponent } from './components/testimonies/fetch-testimonies/fetch-testimonies.component';
import { FetchLocationsComponent } from './components/locations/fetch-locations/fetch-locations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationsComponent,
    LoginComponent,
    PrayerComponent,
    RegistrationComponent,
    TestimoniesComponent,
    LogoutComponent,
    GetRequestComponent,
    FetchTestimoniesComponent,
    FetchLocationsComponent 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [PrayerService, LocationsService, TestimoniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
