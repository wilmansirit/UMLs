import { EstatusCopia } from "./clases/EstatusCopia";

export type PrestamosPorLector = {
    idCopia: string;
    nombreCopia: string;
    fechaPrestamo: string;
    fechaDevolucion:string;
    estatusCopia: EstatusCopia
}

export type Registros = {
    idCopia: string;
    nombreCopia: string;
    fechaPrestamo: string;
    fechaDevolucion:string;
    estatusCopia: EstatusCopia
}