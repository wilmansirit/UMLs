import { EstatusCopia } from "./clases/EstatusCopia";

export type PrestamosPorLector = {
    numeroCopia: string;
    nombreCopia: string;
    fechaPrestamo: Date;
    fechaDevolucion:Date;
    estatusCopia: EstatusCopia
}