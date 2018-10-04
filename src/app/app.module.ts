import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { FormsModule } from '@angular/forms'

import {SlideshowModule} from 'ng-simple-slideshow';
import { SliderComponent } from './components/slider/slider.component';
import { HealthStoriesComponent } from './components/stories/health-stories/health-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    SliderComponent,
    HealthStoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
