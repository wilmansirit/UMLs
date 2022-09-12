import { EstatusCopia } from "./EstatusCopia";
import { Libro } from "./Libro";


export class Copia {
    private idCopia:string; 
    private libro:Libro;
    private estatusCopia:EstatusCopia;

    constructor(libro:Libro, estatusCopia:EstatusCopia, numeroCopia:number){
        this.libro = libro;
        this.estatusCopia = estatusCopia;
        this.idCopia = this.idGenerator(numeroCopia);
    }

    private idGenerator(id:number): string {
        return `${this.libro.getISBN}-copia00${id}`;
    }

    set cambiarEstatusCopia(newEstatusCopia:EstatusCopia) {
        this.estatusCopia = newEstatusCopia;
    }

    get getIdCopia(): string {
        return this.idCopia;
    }

    get getEstatusCopia(): string {
        return this.estatusCopia;
    }

    get getLibro(): Libro {
        return this.libro;
    }
}