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
  selectedSerie!: Serie;

  constructor() { }

  ngOnInit(): void {
    this.serie.push(
      {title: 'Game of Thrones', year: 2011, season: 8, genere: Genere.Fantasy, numseason: [
        {nSeason: 1, title: '1 Stagione', nEpisodes: 12, year:2010},
        {nSeason: 2, title: '2 Stagione', nEpisodes: 15, year:2010},
        {nSeason: 3, title: '3 Stagione', nEpisodes: 10, year:2010},
      ]},
      {title: 'Breaking Bad', year: 2008, season: 5, genere: Genere.Thriller, numseason: [
        {nSeason: 1, title: '1 Stagione', nEpisodes: 12, year:2010},
        {nSeason: 2, title: '2 Stagione', nEpisodes: 15, year:2010},
        {nSeason: 3, title: '3 Stagione', nEpisodes: 10, year:2010},
      ]},
      {title: 'Prison Break', year: 2005, season: 5, genere: Genere.Azione, numseason: [
        {nSeason: 1, title: '1 Stagione', nEpisodes: 12, year:2010},
        {nSeason: 2, title: '2 Stagione', nEpisodes: 15, year:2010},
        {nSeason: 3, title: '3 Stagione', nEpisodes: 10, year:2010},
      ]},
      {title: 'Peaky Blinders', year: 2013, season: 5, genere: Genere.Gangstar, numseason: [
        {nSeason: 1, title: '1 Stagione', nEpisodes: 12, year:2010},
        {nSeason: 2, title: '2 Stagione', nEpisodes: 15, year:2010},
        {nSeason: 3, title: '3 Stagione', nEpisodes: 10, year:2010},
      ]},
      {title: 'Californication', year: 2007, season: 7, genere: Genere.Commedia, numseason: [
        {nSeason: 1, title: '1 Stagione', nEpisodes: 12, year:2010},
        {nSeason: 2, title: '2 Stagione', nEpisodes: 15, year:2010},
        {nSeason: 3, title: '3 Stagione', nEpisodes: 10, year:2010},
      ]},
      {title: 'The Following', year: 2013, season: 3, genere: Genere.Giallo, numseason: [
        {nSeason: 1, title: '1 Stagione', nEpisodes: 12, year:2010},
        {nSeason: 2, title: '2 Stagione', nEpisodes: 15, year:2010},
        {nSeason: 3, title: '3 Stagione', nEpisodes: 10, year:2010},
      ]},
      {title: 'Suburra', year: 2017, season: 3, genere: Genere.Gangstar, numseason: [
        {nSeason: 1, title: '1 Stagione', nEpisodes: 12, year:2010},
        {nSeason: 2, title: '2 Stagione', nEpisodes: 15, year:2010},
        {nSeason: 3, title: '3 Stagione', nEpisodes: 10, year:2010},
      ]}
    )

  }

  getGenreValue(index: number): string {
    return Genere[index];
  }

  selectionClick(s: Serie): void {
    this.selectedSerie = s;
  }

  deleteSerie(s: Serie):void{
    let index = this.serie.indexOf(s)
    this.serie.splice(index,1);
  }

  serieFormEvent(serieAdded: Serie) {
    this.serie.push(serieAdded);
  }

}
