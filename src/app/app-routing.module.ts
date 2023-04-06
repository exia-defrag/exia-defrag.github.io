import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/home/landing-page/landing-page.component';
import { PokemonInclementEmeraldComponent } from './pages/nuzlocke/pokemon-inclement-emerald/pokemon-inclement-emerald.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'inclementEmeraldNuzlocke', component: PokemonInclementEmeraldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
