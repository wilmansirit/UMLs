import { TipoInstrumento } from "./TipoInstrumento";

export class Instrumento {

    ID:string;
    tipo:string;
    precio:number;

    constructor(ID:string, precio:number, tipo:TipoInstrumento){
        this.ID = ID;
        this.tipo = tipo;
        this.precio = precio;
    }


}