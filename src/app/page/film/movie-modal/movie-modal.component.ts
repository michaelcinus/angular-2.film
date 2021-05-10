import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import {Genere} from "src/app/model/genere"

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.css']
})
export class MovieModalComponent implements OnInit {

  @Input()
  movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  getGenreValue(index: number): string {
    return Genere[index];
  }

}
