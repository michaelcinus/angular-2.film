import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Serie } from 'src/app/model/serie';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Genere } from 'src/app/model/genere';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent implements OnInit {

  @Input()
  serie!: Serie;

  @Output()
  feedbackEv: EventEmitter<Serie>

  serieForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.feedbackEv = new EventEmitter<Serie>();
    this.serieForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      genere: ['', Validators.required],
      year: ['', Validators.required],
      season: ['', Validators.required],
    });

   }

  ngOnInit(): void {
  }

  submit() {
    let s: Serie = this.serieForm.value;
    this.feedbackEv.emit(s);
    this.serieForm.reset();

  }

}
