import { Genere } from "./genere";

export interface Movie {
    image: string;
    title: string;
    description: string;
    year: number;
    duration: number;
    genere: Genere;
}