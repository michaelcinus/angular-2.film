import {Genere} from "src/app/model/genere"

export interface Serie {
    title: string;
    year: number;
    season: number;
    genere: Genere;
}