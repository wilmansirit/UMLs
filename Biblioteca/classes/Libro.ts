import { Autor } from "./Autor";
import { TipoLibro } from "./TipoLibro";

 export class Libro {
    
    private ISBN:string;
    private nombreLibro:string;
    private editorial:string;
    private anio:number;
    private autor:Autor
    private tipoLibro:TipoLibro;

    constructor(
        ISBN:string, 
        nombreLibro:string, 
        editorial:string, 
        anio:number, 
        autor:Autor,
        tipoLibro:TipoLibro) {

        this.ISBN = ISBN;
        this.nombreLibro = nombreLibro;
        this.editorial = editorial;
        this.anio = anio;
        this.autor = autor;
        this.tipoLibro = tipoLibro
    }

    public get getISBN(): string {
        return this.ISBN;
    }

    get getNombreLibro(): string {
        return this.nombreLibro
    }

 }  