import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { FormsModule } from '@angular/forms'

import {SlideshowModule} from 'ng-simple-slideshow';
import { SliderComponent } from './components/slider/slider.component';
import { HealthStoriesComponent } from './components/stories/health-stories/health-stories.component';
import { AboutusComponent } from './components/others/aboutus/aboutus.component';
import { ContactusComponent } from './components/others/contactus/contactus.component';
import { BlogsComponent } from './components/others/blogs/blogs.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {Routes, RouterModule} from '@angular/router'

const appRoutes : Routes =[
  {path:"landing",component:LandingComponent},
  {path:"about", component:AboutusComponent},
  {path:"contact",component:ContactusComponent},
  {path:"**",redirectTo:"/landing",pathMatch:"full"},
  {path:"",redirectTo:"/landing",pathMatch:"full"}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    SliderComponent,
    HealthStoriesComponent,
    AboutusComponent,
    ContactusComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlideshowModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
