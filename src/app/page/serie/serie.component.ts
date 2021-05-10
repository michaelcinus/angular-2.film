import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/model/serie';
import {Genere} from "src/app/model/genere"

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  serie: Array<Serie> = [];

  constructor() { }

  ngOnInit(): void {
    this.serie.push(
      {title: 'Game of Thrones', year: 2011, season: 8, genere: Genere.Fantasy},
      {title: 'Breaking Bad', year: 2008, season: 5, genere: Genere.Thriller},
      {title: 'Prison Break', year: 2005, season: 5, genere: Genere.Azione},
      {title: 'Peaky Blinders', year: 2013, season: 5, genere: Genere.Gangstar},
      {title: 'Californication', year: 2007, season: 7, genere: Genere.Commedia},
      {title: 'The Following', year: 2013, season: 3, genere: Genere.Giallo},
      {title: 'Suburra', year: 2017, season: 3, genere: Genere.Gangstar}
    )

  }

  getGenreValue(index: number): string {
    return Genere[index];
  }

}
