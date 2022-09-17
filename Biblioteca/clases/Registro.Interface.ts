import { EstatusCopia } from "./EstatusCopia";

export type Registro = {
    idCopia: string;
    nombreCopia: string;
    fechaPrestamo: string;
    fechaMaxDevolucion:string;
    fechaRealDevolucion:string;
    estatusCopia: EstatusCopia
}