import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { DevProjectsComponent } from './components/dev-projects/dev-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeroComponent,
    DevProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
