import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Genere } from 'src/app/model/genere';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Input()
  movie?: Movie;

  @Output()
  //feedbackEv: EventEmitter<string>;
  feedbackEv: EventEmitter<Movie>


  constructor() { 
    // this.feedbackEv = new EventEmitter<string>();
    this.feedbackEv = new EventEmitter<Movie>();
   }

  ngOnInit(): void {}

  // triggerEvent() {
  //   this.feedbackEv.emit('movie created!');
  // }

  addFilm(title: string, genere: any, year: any, duration: any, image: string, description: string) {
    var m = {title: title, genere: genere, year: year, duration: duration, image: image, description: description};
    this.feedbackEv.emit(m);
  }

}
