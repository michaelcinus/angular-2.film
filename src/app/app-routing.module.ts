import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './page/film/film.component';
import { HomeComponent } from './page/home/home.component';
import { SeasonComponent } from './page/season/season.component';
import { SerieComponent } from './page/serie/serie.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'films', component: FilmComponent},
  {path: 'serie', component: SerieComponent},
  {path: 'season', component: SeasonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
