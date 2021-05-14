import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Serie } from 'src/app/model/serie';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.css']
})
export class SerieEditComponent implements OnInit {

  @Input()
  serie!: Serie

  @Output()
  feedbackEv: EventEmitter<Serie>

  serieEditForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.feedbackEv = new EventEmitter<Serie>();
    this.serieEditForm = this.formBuilder.group({
      title: [''],
      genere: [''],
      year: [''],
      season: [''],
    });

   }

  ngOnInit(): void {
  }

  edit() {
    
  }

}
