import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralNavbarComponent } from './components/navbars/general-navbar/general-navbar.component';
import { LandingPageComponent } from './pages/home/landing-page/landing-page.component';
import { GithubProfileWidgetComponent } from './components/widgets/github-profile-widget/github-profile-widget.component';
import { ScheduleComponent } from './components/widgets/schedule/schedule.component';
import { PokemonInclementEmeraldComponent } from './pages/nuzlocke/pokemon-inclement-emerald/pokemon-inclement-emerald.component';
import { GamesPlayedComponent } from './components/games-played/games-played.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralNavbarComponent,
    LandingPageComponent,
    GithubProfileWidgetComponent,
    ScheduleComponent,
    PokemonInclementEmeraldComponent,
    GamesPlayedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
