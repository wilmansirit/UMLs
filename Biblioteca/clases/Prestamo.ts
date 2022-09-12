import { Copia } from "./Copia";
import { Lector } from "./Lector";

export class Prestamo {
    private lector:Lector;
    private copia:Copia;
    private fechaPrestamo:Date;
    private fechaDevolucion:Date

    constructor(lector:Lector, copia:Copia, fechaPrestamo:Date, fechaDevolucion:Date) {

        this.lector = lector;
        this.copia = copia;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;

    }
}