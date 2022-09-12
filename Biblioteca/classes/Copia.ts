import { Autor } from "./Autor";
import { EstatusCopia } from "./EstatusCopia";
import { Libro } from "./Libro";
import { TipoLibro } from "./TipoLibro";


export class Copia extends Libro{
    private idCopia:string; 
    private estatusCopia:EstatusCopia;

    constructor(
            ISBN:string, 
            nombreLibro:string, 
            editorial:string, 
            anio:number, 
            autor:Autor,
            tipoLibro:TipoLibro,
            estatusCopia:EstatusCopia,
            idCopia:string
        )
        {
            super(ISBN, nombreLibro, editorial, anio, autor, tipoLibro)
            this.estatusCopia = estatusCopia;
            this.idCopia = idCopia;
    }

    private idGenerator(id:number): string {
        return `${this.ISBN}-copia00${id}`;
    }


}