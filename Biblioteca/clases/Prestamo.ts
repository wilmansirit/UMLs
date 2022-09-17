import { Copia } from "./Copia";
import { Lector } from "./Lector";

export class Prestamo {
    private lector:Lector;
    private copia:Copia;
    private _fechaPrestamo:Date;
    private _fechaDevolucion:Date

    constructor(lector:Lector, copia:Copia, fechaPrestamo:Date, fechaDevolucion:Date) {
        this.lector = lector;
        this.copia = copia;
        this._fechaPrestamo = fechaPrestamo;
        this._fechaDevolucion = fechaDevolucion;
    }

    get getIdCopia(): string {
        return this.copia.getIdCopia;
    }

    get getLector(): Lector {
        return this.lector;
    }

    get getCopia(): Copia {
        return this.copia;
    }

    get fechaPrestamo(): Date {
        return this._fechaPrestamo;
    }
    
    get fechaDevolucion(): Date {
        return this._fechaDevolucion;
    }

}