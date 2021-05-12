import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { FilmComponent } from './page/film/film.component';
import { SerieComponent } from './page/serie/serie.component';
import { SeasonComponent } from './page/season/season.component';
import { MovieFormComponent } from './page/film/movie-form/movie-form.component';
import { MovieModalComponent } from './page/film/movie-modal/movie-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieEditComponent } from './page/film/movie-edit/movie-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FilmComponent,
    SerieComponent,
    SeasonComponent,
    MovieFormComponent,
    MovieModalComponent,
    MovieEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
