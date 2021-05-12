import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import {Genere} from "src/app/model/genere";
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  movies:Array<Movie> = [];
  selectedMovie!: Movie;

  constructor(private movieService: MovieService) { this.selectedMovie = movieService.getAll()[0]; }

  ngOnInit(): void {
    this.movies = this.movieService.getAll();
  }

  getGenreValue(index: number): string {
    return Genere[index];
  }

  selectionClick(m: Movie): void {
    //alert( JSON.stringify(m.title))
    this.selectedMovie = m;
  }

  deleteMovie(m: Movie):void{
    let index = this.movies.indexOf(m)
    this.movies.splice(index,1);
  }

  movieFormEvent(movieAdded: Movie) {
    this.movieService.add(movieAdded);
  }

}
