import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import {Genere} from "src/app/model/genere"

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  movies:Array<Movie> = [];
  selectedMovie!: Movie;

  constructor() { }

  ngOnInit(): void {
    this.movies.push(
      {genere: Genere.Avventura,  image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0x0i0lBZwwD5MWFXUtBmkU42uFqC6JcS3pLNXv6TmrXEvaqFs', title: 'Hulk', description: "Lo scienziato Bruce Banner, assieme alla fidanzata Elizabeth Betty Ross, studia per conto del governo americano l'utilizzo di un siero per creare un supersoldato. Allo scopo di ottenere risultati più rapidi, prova la versione sperimentale su sé stesso, trasformandosi in un gigante verde. ", year: 2008, duration: 112},
      {genere: Genere.Avventura,  image: 'http://aforismi.meglio.it/img/film/Iron_man.jpg', title: 'Iron Man', description: "Tony Stark è a capo delle Stark Industries, nota azienda produttrice di armi. Presso una base militare statunitense in Afghanistan, Tony presenta il suo nuovo missile, il Jericho. Terminata l'esposizione, Stark si mette in viaggio verso l'aeroporto, ma durante il tragitto il convoglio che lo scorta viene attaccato da alcuni terroristi e Tony viene rapito. Numerose schegge si conficcano nel petto dell'inventore a seguito dell'esplosione di una bomba e, per evitare che esse raggiungano il cuore, Yinsen, un fisico compagno di prigionia di Tony, gli impianta nel petto un elettromagnete. ", year: 2008, duration: 126 },
      {genere: Genere.Avventura,  image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRfJSYbYvCmuxWSMXrH_xST3iix1Wt7LG9ASWTQH8bIbUx_v_ML', title: 'Thor', description: 'Nel 965 d.C. Odino, re di Asgard, intervenne con i suoi guerrieri contro i Giganti di Ghiaccio, intenti a conquistare i Nove Mondi partendo dalla Terra. Dopo aver vinto la guerra Odino costrinse alla resa il loro re, Laufey, privandolo sia dello "Scrigno degli Antichi Inverni", fonte del suo potere, sia di suo figlio, il neonato Loki che poi Odino adottò come figlio proprio.', year: 2011, duration: 114 },
      {genere: Genere.Avventura,  image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTA_kF1RtV8xGDH5eqEnFeH_PqsF9XvnMhdrafVRb4ik1y7tJvU', title: 'Captain America', description: 'Un gruppo di scienziati rinviene un relitto di un vecchio velivolo fra i ghiacci del Polo nord. Due esploratori riescono a penetrare nella carcassa e rinvengono un misterioso oggetto circolare blu, bianco e rosso. ', year: 2011, duration: 124 }
      );
  }

  getGenreValue(index: number): string {
    return Genere[index];
  }

  selectionClick(m: Movie): void {
    //alert( JSON.stringify(m.title))
    this.selectedMovie = m;
  }

  movieFormEvent(event: Movie) {
    this.movies.push({
      genere: Number(event.genere),  image: event.image, title: event.title, description: event.description, year: Number(event.year), duration: Number(event.duration)}
    );
  }

}
