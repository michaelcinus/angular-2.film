import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from 'src/app/model/movie';
import {Genere} from "src/app/model/genere";
import { MovieService } from 'src/app/services/movie.service';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  @Input()
  movie!: Movie

  @Output()
  feedbackEv: EventEmitter<Movie>;

  editForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.feedbackEv = new EventEmitter<Movie>();
    this.editForm = this.formBuilder.group({
      title: [],
      genere: [],
      year: [],
      duration: [],
      image: [],
      description: []

    });
  }

  ngOnInit(): void {
  }

  edit() {    
    let m: Movie = this.editForm.value;
    this.feedbackEv.emit(m);
    
  }

}
