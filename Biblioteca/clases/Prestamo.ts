import { v4 as uuidv4 } from "uuid";

import { Copia } from "./Copia";
import { Lector } from "./Lector";

export class Prestamo {
    public idPrestamo:string
    private lector:Lector;
    private copia:Copia;
    private fechaPrestamo:Date;
    private fechaDevolucion:Date

    constructor(lector:Lector, copia:Copia, fechaPrestamo:Date, fechaDevolucion:Date) {

        this.lector = lector;
        this.copia = copia;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.idPrestamo = uuidv4();
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
}