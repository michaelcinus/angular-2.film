import {Genere} from "src/app/model/genere"
import {Season} from "src/app/model/season"

export interface Serie {
    title: string;
    year: number;
    season: number;
    genere: Genere;
    numseason: Season[];
}